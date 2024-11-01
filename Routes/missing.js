const express = require('express')
const {connection} = require('./db_config')

const route = express.Router()

route.get('/missing', (req, res)=>{
    res.render('missing',{message: ''})
})


route.post('/missing', (req, res) => {
    // Get the form data from req.body
    const { reporter_name, reporter_contact, missing_person_name ,  missing_person_id, missing_date, missing_location } = req.body;
    console.log(reporter_name, reporter_contact, missing_person_name ,  missing_person_id, missing_date, missing_location);
  
    // Construct the SQL query
    const query =
      'INSERT INTO missing_person_reports (reporter_name, reporter_contact, missing_person_name ,  missing_person_id, missing_date, missing_location) VALUES (?, ?, ?, ?, ?, ?)';
  
    // Insert form data into MySQL
    connection.query(query, [reporter_name, reporter_contact, missing_person_name ,  missing_person_id, missing_date, missing_location], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).send('Database error.');
      }
  
      console.log('Missing report submitted successfully:', result);
      res.render('missing', {message: 'Report is submitted sucessfully!'});
    });
  });

module.exports = route
