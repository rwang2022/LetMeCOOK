const pg = require('pg');
const { Client } = pg;

require('dotenv').config();

const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
})

client.connect().then((rsp) => {
    console.log("Successfully connected to the database!")
}).catch((err) => {
    console.log(err)
})

// ! UNTESTED CODE
const app = express()

app.post('/create_ingredient', async (req, res) => {
    const text = 'INSERT INTO Ingredients(name, category) VALUES($1, $2) RETURNING *';
    const values = ['eggs', 'poultry'];

    try {
        const result = await client.query(text, values);
        res.status(201).send(result.rows[0]);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error inserting ingredient');
    }
});
