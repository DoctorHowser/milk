const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
  // GET route code here
  const {rows} = await pool.query(`SELECT * FROM "details" ORDER BY id;`)
  res.send(rows);
});

module.exports = router