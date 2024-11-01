const express = require('express')
const {connection} = require('./db_config')

const route = express.Router()

route.get('/fir', (req, res)=>{
    res.render('fir', {message: ''})
})


route.post('/fir', (req, res) => {
    // Get the form data from req.body
    const {name , address , phone, email , incident_date , incident_description } = req.body;
    console.log(name , address , phone, email , incident_date , incident_description);
  
    // Construct the SQL query
    const query =
      'INSERT INTO fir_reports (name , address , phone, email , incident_date , incident_description) VALUES (?, ?, ?, ?, ?, ?)';
  
    // Insert form data into MySQL
    connection.query(query, [name , address , phone, email , incident_date , incident_description], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).send('Database error.');
      }
  
      console.log('Arrest report submitted successfully:', result);
      res.render('fir', {message: 'Report is submitted sucessfully!'});
    });
  });

module.exports = route