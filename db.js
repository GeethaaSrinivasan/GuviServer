const mysql = require('mysql')
const db = mysql.createConnection({
host: "sql12.freesqldatabase.com",
user: "sql12656888",
password: "tIRbec3H7z",
database:"sql12656888",
port:3307
})

module.exports = db;
