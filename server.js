const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('ejs')
const firRoute = require('./Routes/fir')
const arrestRoute = require('./Routes/arrest')
const missingRoute = require('./Routes/missing')
const contactRoute = require('./Routes/contact')
const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {})
})

app.use('/', firRoute)
app.use('/', arrestRoute)
app.use('/', missingRoute)
app.use('/', contactRoute)

app.listen(port, ()=>{
    console.log('Server is running on port: ', port)
})