const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

// Error handling middleware
app.use(errorHandler);

module.exports = app;
