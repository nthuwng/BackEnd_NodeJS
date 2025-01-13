const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/hoidanit', (req, res) => {
  res.send('<h1>Check hoidanit</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})