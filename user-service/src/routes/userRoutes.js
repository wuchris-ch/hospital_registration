const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

// healthcheck endpoint
router.get('/health', (req, res) => res.status(200).send('OK'));

module.exports = router;
