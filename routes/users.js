const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all users (for browser test)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// TEST route
router.get('/test', (req, res) => {
  res.send('Users route OK');
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      res.json({
        success: true,
        user: rows[0]
      });
    } else {
      res.json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;