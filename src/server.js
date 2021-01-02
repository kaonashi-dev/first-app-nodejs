const express = require('express');
const path = require('path');

const app = express();

const config = require('./config');
const router = require('./routes/router');

/// Configuración
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.engine('js',require('pug').renderFile);
app.use(express.static(path.join(__dirname, '/public')));

/// Routes
app.use(router);

app.listen(config.port, (req, res) => console.log(`Server listening on port ${config.port}`));