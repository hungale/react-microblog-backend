/** Database connection for Microblog. */
const dotenv = require('dotenv').config();
const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql:///microblog");

client.connect();

module.exports = client;
