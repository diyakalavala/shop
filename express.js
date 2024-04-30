const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.static('idk/build')); //react app build portion

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'cs348-hw3-415105:us-east5:cs348-hw3',
  user: 'diyakalavala',
  password: 'Aditya123!',
  database: 'shop'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Endpoint to fetch current orders
app.get('/api/currentOrder', (req, res) => {
  // Query to fetch current orders from the database
  connection.query('SELECT * FROM currentOrder', (error, results, fields) => {
    if (error) {
      console.error('Error fetching current orders:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ data: results });
  });
});

// Endpoint to fetch users data
app.get('/api/users', (req, res) => {
  // Query to fetch users data from the database
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ users: results });
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
