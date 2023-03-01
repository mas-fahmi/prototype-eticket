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

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})