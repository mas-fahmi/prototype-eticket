const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prototype-eticket"
})

con.connect((err) => {
    if (err) throw err;
    console.log('Connection Succes');
})