// src/configs/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Use the MySQL_URL provided by Railway
const connection = mysql.createConnection(process.env.MYSQL_URL);

module.exports = connection.promise();