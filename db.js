const mysql = require('mysql')
const db = mysql.createConnection({
host: "sql12.freesqldatabase.com",
user: "sql12658777",
password: "y7Vrcn4QaZ",
database:"sql12658777",
port:3306,
connectTimeout: 30000
})

module.exports = db;
