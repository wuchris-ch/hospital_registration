const express = require('express');
const userController = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../middlewares/validators/userValidators');
const validateRequest = require('../middlewares/validateRequest');
const router = express.Router();

router.post('/register', registerValidation, validateRequest, userController.register);
router.post('/login', loginValidation, validateRequest, userController.login);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Health endpoint (can be in app.js if preferred)
router.get('/health', (req, res) => res.status(200).send('OK'));

module.exports = router;
