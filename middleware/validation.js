const { body, validationResult } = require('express-validator');

const validateContact = [
  body('name').isLength({ min: 1 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').isLength({ min: 1 }).withMessage('Phone is required'),
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = { validateContact, handleValidationErrors };