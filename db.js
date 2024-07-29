const pg = require('pg');
var { connectionString } = require('pg/lib/defaults');
const { Client } = pg;

require('dotenv').config();

connectionString = process.env.CONNECTION_STRING;

const client = new Client({
    connectionString,
})

client.connect().then((rsp) => {
    console.log("Successfully connected to the database!")
}).catch((err) => {
    console.log(err)
})