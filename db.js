/** Database connection for Microblog. */
const dotenv = require('dotenv').config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgresql:///microblog",
  ssl: { rejectUnauthorized: false }
});

client.connect();

module.exports = client;
