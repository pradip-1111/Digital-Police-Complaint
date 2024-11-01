const express = require('express');
const { connection } = require('./db_config'); // Import the connection object
const route = express.Router();

route.get('/arrest', (req, res) => {
  res.render('arrest', {message: ''});
});

route.post('/arrest', (req, res) => {
  // Get the form data from req.body
  const { officer_name, officer_id, criminal_name, criminal_id, arrest_date, arrest_location, charges } = req.body;
  console.log(officer_name, officer_id, criminal_name, criminal_id, arrest_date, arrest_location, charges);

  // Construct the SQL query
  const query =
    'INSERT INTO arrest_reports (officer_name, officer_id, criminal_name, criminal_id, arrest_date, arrest_location, charges) VALUES (?, ?, ?, ?, ?, ?, ?)';

  // Insert form data into MySQL
  connection.query(query, [officer_name, officer_id, criminal_name, criminal_id, arrest_date, arrest_location, charges], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).send('Database error.');
    }

    console.log('Arrest report submitted successfully:', result);
    res.render('arrest', {message: 'Report is submitted sucessfully!'});
  });
});

module.exports = route;