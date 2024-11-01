const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ranjit',
    database: 'digitalproject'
})

connection.connect((err)=>{
    if(err){
        throw console.log('Error while connecting the database.')
    }
    console.log('Connection is successfull!')
})

module.exports = {connection}