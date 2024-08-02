const { body } = require('express-validator');

const registerValidation = [
    body('username')
        .isLength({ min: 5 })
        .withMessage('Username must be at least 5 characters long'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
];

const loginValidation = [
    body('username')
        .notEmpty()
        .withMessage('Username is required'),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

module.exports = {
    registerValidation,
    loginValidation
};
