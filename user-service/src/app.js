const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// healthcheck
app.get('/health', (req, res) => res.status(200).send('OK'));

module.exports = app;
