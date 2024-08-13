const pg = require('pg');
const { Client } = pg;
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
})

client.connect().then((rsp) => {
    console.log("Successfully connected to the database!")
}).catch((err) => {
    console.log(err)
})



app.post('/create_ingredient', async (req, res) => {
    // ! THIS IS THE NEW LINE
    const { name, category } = req.body;
    
    const text = 'INSERT INTO Ingredients(name, category) VALUES($1, $2) RETURNING *';
    // ! dynamic, instead of values=["apples", "fruit"]
    const values = [name, category];

    try {
        const result = await client.query(text, values);
        res.status(201).send(result.rows[0]);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error inserting ingredient');
    }
});
