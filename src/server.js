const express = require('express');

const config = require('./config');

const app = express();

app.use('/', (req, res) => {
    res.send('Hola mundo :)');
});

app.listen(config.port, (req, res) => {
    console.log(`Server listening on port ${config.port}`);
});