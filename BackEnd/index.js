const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const con = require("./connection");
const response = require("./response")


app.use(bodyParser.json());

app.get('/', (req, res) => {
    response(200, "api ready to use", "ready", res)
});

app.get('path', (req, res) => {

});

//route post
app.post('/postOrder', (req, res) => {

    //generate random char for idTicket
    function makeid(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }
    var output = "TC" + makeid(8);
    const id_ticket = JSON.parse(output);
    console.log(id_ticket);

    const {nik, full_name, address, fest_name, payments} = req.body

    const sql = `INSERT INTO order_ticket (id_ticket, nik, full_name, address, fest_name, 
        payments) VALUES (${nik}, '${full_name}', '${address}', '${fest_name}', '${payments}', '${id_ticket}')`

    con.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Order Successfuly", res)
        }
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})