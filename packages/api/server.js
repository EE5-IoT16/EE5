const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "message": "Oiii mate!"
    });
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});