const express = require('express')
const app = express()
require('dotenv').config()

port = process.env.PORT

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req ,res) => {
    res.send("Twitter API")
})

app.get('/facebook', (req ,res) => {
    res.send("<h1>Facebook API</h1>")
})

app.get('/instagram', (req ,res) => {
    res.send("Instagram API")
})

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
})