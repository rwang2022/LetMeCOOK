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