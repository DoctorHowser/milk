const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', async (req, res, next) => {
  const client = await pool.connect()

  try {
    await client.query("BEGIN;")
    const { username, password, name, address, phone, baby_birthdate, milk_bag_link, qualities } = req.body;
    const hashed = encryptLib.encryptPassword(password);

    const queryText = `INSERT INTO "user" (username, password, name, address, phone, baby_birthdate, milk_bag_link)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
    const { rows } = await client.query(queryText, [username, hashed, name, address, phone, baby_birthdate, milk_bag_link])
    const newPersonId = rows[0].id

    const qualitiesQuery = `INSERT INTO "user_detail" ("user_id", "detail_id") VALUES ($1, $2)`
    await Promise.all(qualities.map(async (qId) => {
      await client.query(qualitiesQuery, [newPersonId, qId])
    }))
    await client.query("COMMIT;")

    res.sendStatus(201);


  } catch (err) {
    await client.query("ROLLBACK;")
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  } finally {
    client.release()
  }
  ;
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
