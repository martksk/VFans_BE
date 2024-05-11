const express = require('express')
const mysql = require('mysql2')
const bcrypt = require('bcrypt');


const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'css222',
  database: 'projecttest'
})

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ");
    return;
  }
  console.log('connected to database');
})



app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  const query = `INSERT INTO users (username, email, password) VALUES (?,?,?)`;
  connection.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).json({error : "Internal Server Error"});
    }
    res.json({
      message: "Data inserted successfully",
      insertedId: result.insertId
    })
  })
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Query the database for the user
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], (err, users) => {
    if (err) {
      console.error("Error querying database: ", err);
      res.status(500).json({error : "Internal Server Error"});
      return;
    }

    if (users.length > 0) {
      // Check if the provided password matches the stored password
      if (password === users[0].password) {
        // Passwords match
        res.json({ message: 'Login successful' });
      } else {
        // Passwords don't match
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } else {
      // User not found
      res.status(404).json({ message: 'User not found' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})