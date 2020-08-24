/** Database connection for Microblog. */
const dotenv = require('dotenv').config();
const { Client } = require("pg");

const client = process.env.NODE_ENV === 'development' 
                ? new Client(process.env.DATABASE_URL)
                : new Client("postgresql:///microblog")

client.connect();

module.exports = client;
