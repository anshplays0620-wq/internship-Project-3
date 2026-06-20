const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // replace with your MySQL username
  password: 'Prasann1@Ansh', // replace with the root password you set
  database: 'project3'   // the database you created in Step 4
});

// Test connection
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// CREATE - Add new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, name, email });
  });
});

// READ - Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// UPDATE - Modify user
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const query = 'UPDATE users SET name=?, email=? WHERE id=?';
  db.query(query, [name, email, req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User updated successfully' });
  });
});

// DELETE - Remove user
app.delete('/users/:id', (req, res) => {
  const query = 'DELETE FROM users WHERE id=?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User deleted successfully' });
  });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
