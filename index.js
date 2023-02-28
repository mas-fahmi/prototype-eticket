const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");


app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})