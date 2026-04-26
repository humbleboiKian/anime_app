const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all anime
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM anime');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;