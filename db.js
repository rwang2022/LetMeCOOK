const pg = require('pg');
const { Client } = pg;
const express = require('express')
const app = express()
const port = 3000

require('dotenv').config();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})

// Connecting to the database 
const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
})

client.connect().then((rsp) => {
    console.log("Successfully connected to the database!")
}).catch((err) => {
    console.log(err)
})

app.use(express.urlencoded({extended: true}));

app.post('/create_ingredient', async (req, res) => {
    console.log(req.body);
    const { name, category } = req.body;
    
    const text = 'INSERT INTO Ingredients(name, category) VALUES($1, $2) RETURNING *';
    const values = [name, category];

    try {
        const result = await client.query(text, values);
        res.status(201).send(result.rows[0]);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error inserting ingredient');
    }
});
