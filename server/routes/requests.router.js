const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.use(rejectUnauthenticated)

/**
 * GET route template
 */
router.get('/', async (req, res) => {
  // GET route code here
  try {
    const { rows } = await pool.query(`
        SELECT "requests".*, "user".name, "user".address, "user".phone, "user".baby_birthdate, 
        ARRAY_AGG("user_detail".detail_id) as "qualities" FROM "requests" 
        JOIN "user" ON "user".id = "requests".user_id
        LEFT JOIN "user_detail" ON "user".id = "user_detail".user_id
        GROUP BY requests.id, "user".id
        ORDER BY "requests".id;
        `)
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
});
/**
 * POST route template
 */
router.post('/', async (req, res) => {
  try {
    // POST route code here
    const { baby_dob, baby_name, story } = req.body;

    const query = `
    INSERT INTO "requests" (story, baby_dob, baby_name, user_id)
    VALUES ($1, $2, $3, $4)
  `
    const values = [story, baby_dob, baby_name, req.user.id]

    await pool.query(query, values)
    res.sendStatus(201)

  } catch (err) {
      console.log(err)
    res.sendStatus(500)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // POST route code here
    const { id } = req.params;
    console.log(id, req.user.id)

    const query = `
    DELETE FROM "requests" 
    WHERE id = $1 AND user_id = $2;
  `
    const values = [id, req.user.id]

    await pool.query(query, values)
    res.sendStatus(204)

  } catch (err) {
    res.sendStatus(500)
  }
});

module.exports = router;
