const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! vs Hoi dan IT & nodemon')
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/hoidanit', (req, res) => {
  // res.send('<h1>Check hoidanit</h1>')
  res.render('sample.ejs')
})

app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})