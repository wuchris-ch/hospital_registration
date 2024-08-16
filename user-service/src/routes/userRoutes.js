const express = require('express');
const userController = require('../controllers/userController');
const doctorController = require('../controllers/doctorController');
const { registerValidation, loginValidation } = require('../../../middlewares/validators/userValidators');
const validateRequest = require('../../../middlewares/validateRequest');
const router = express.Router();

router.post('/register', registerValidation, validateRequest, userController.register);
router.post('/login', loginValidation, validateRequest, userController.login);

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/doctors', doctorController.getAllDoctors);
router.get('/doctors/:id', doctorController.getDoctor);
router.post('/doctors', doctorController.addDoctor);
router.put('/doctors/:id', doctorController.updateDoctor);
router.delete('/doctors/:id', doctorController.deleteDoctor);

// Health endpoint
router.get('/health', (req, res) => res.status(200).send('OK'));

module.exports = router;
