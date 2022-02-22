const express = require('express');
const app = express();

// In the future can be get as a parameter from the command line
const port = 3000;

app.get('/', (req, res) => { 
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});