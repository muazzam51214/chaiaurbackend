require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Chai Aur Code!')
})
app.get('/twitter', (req, res) => {
  res.send("Twitter With Chai")
})
app.get('/login', (req, res) => {
  res.send("<h1>Please Login At Chai Aur Code</h1>")
})
app.get('/chai', (req, res) => {
    res.send("<h2>Chai With H2</h2>")
})

app.listen(port, () => {
  console.log(`Chai Aur Code listening on port ${port}`)
})