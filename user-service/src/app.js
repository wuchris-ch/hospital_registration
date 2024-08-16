const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Parse JSON bodies
app.use(express.json());

// Middlewares
const errorHandler = require('../../middlewares/errorHandler');

// Routes
const router = require('./routes/userRoutes');
app.use('/api', router);

// Error handler
app.use(errorHandler);

// Ensure the database is connected
const sequelize = require('../../common/database');
sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app;
