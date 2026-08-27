const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL connection if configured
let pool = null;
if (process.env.POSTGRES_HOST) {
  pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  });
}

// Simple in-memory fallback for exercises before DB
let tasks = [];

app.get('/api/tasks', async (req, res) => {
  if (pool) {
    try {
      const result = await pool.query('SELECT id, title FROM tasks ORDER BY id');
      return res.json(result.rows);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  res.json(tasks.map((t, i) => ({ id: i + 1, title: t })));
});

app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });

  if (pool) {
    try {
      const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING id, title', [title]);
      return res.status(201).json(result.rows[0]);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  tasks.push(title);
  res.status(201).json({ id: tasks.length, title });
});

app.delete('/api/tasks/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (pool) {
    try {
      await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
      return res.status(204).end();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (isNaN(id) || id < 1 || id > tasks.length) return res.status(404).json({ error: 'not found' });
  tasks.splice(id - 1, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
