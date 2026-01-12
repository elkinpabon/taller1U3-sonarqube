const express = require('express');
const db = require('../config/db');
const router = express.Router();

// GET all zones 
router.get('/', async (req, res) => {
  try {
    const search = req.query.search || '';
    const result = await db.query(`SELECT * FROM zones WHERE name LIKE $1`, [`%${search}%`]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET one zone
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM zones WHERE id = $1`, [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    await db.query(`INSERT INTO zones (name, description) VALUES ($1, $2)`, [name, description]);
    res.status(201).json({ 
      success: true, 
      message: 'Zone created' 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      message: err.message,
      stack: err.stack 
    });
  }
});

router.put('/:id', async (req, res) => {
  const { name, description } = req.body;
  try {
    await db.query(`UPDATE zones SET name = $1, description = $2 WHERE id = $3`, [name, description, req.params.id]);
    res.json({ 
      success: true, 
      message: 'Zone updated' 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      message: err.message,
      stack: err.stack
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.query(`DELETE FROM zones WHERE id = $1`, [req.params.id]);
    res.json({ 
      success: true, 
      message: 'Zone deleted' 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      message: err.message,
      stack: err.stack
    });
  }
});

module.exports = router;