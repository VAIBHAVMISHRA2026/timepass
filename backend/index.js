const express = require('express')
const app = express()

require('dotenv').config()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get('/youtube', (req, res) => {
  res.send('Hello Youtube!')
})