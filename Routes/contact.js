const express = require('express')
const {connection} = require('./db_config')

const route = express.Router()

route.get('/contact', (req, res)=>{
    res.render('contact', {message: ''})
})

route.post('/contact', (req, res) => {
    // Get the form data from req.body
    const { name, email, subject, message } = req.body;
    console.log( name, email, subject, message );
  
    // Construct the SQL query
    const query =
      'INSERT INTO contact_messages ( name, email, subject, message ) VALUES (?, ?, ?, ?)';
  
    // Insert form data into MySQL
    connection.query(query, [ name, email, subject, message ], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).send('Database error.');
      }
  
      console.log('Arrest report submitted successfully:', result);
      res.render('contact', {message: 'Report is submitted sucessfully!'});
    });
  });

module.exports = route
