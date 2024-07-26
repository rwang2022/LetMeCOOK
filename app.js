const express = require('express')
const app = express()
const port = 3000
require('./auth')

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/helloWorld', (req,res) => {
    res.send('Hello World! from hello')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
