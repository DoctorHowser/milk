const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
  // GET route code here
  try {
    const { rows } = await pool.query(`
        SELECT "offers".*, "user".name, "user".address, "user".phone, "user".baby_birthdate, 
        ARRAY_AGG("user_detail".id) as "qualities" FROM "offers" 
        JOIN "user" ON "user".id = "offers".user_id
        LEFT JOIN "user_detail" ON "user".id = "user_detail".user_id
        GROUP BY offers.id, "user".id
        ORDER BY "offers".id;
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
    const { volume, milk_date, description } = req.body;

    const query = `
    INSERT INTO "offers" (volume, milk_date, description, user_id)
    VALUES ($1, $2, $3, $4)
  `
    const values = [volume, milk_date, description, req.user.id]

    await pool.query(query, values)
    res.sendStatus(201)

  } catch (err) {
    res.sendStatus(500)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // POST route code here
    const { id } = req.params;
    console.log(id, req.user.id)

    const query = `
    DELETE FROM "offers" 
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
