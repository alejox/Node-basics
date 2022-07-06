const { body, validationResult } = require('express-validator');

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    //Array has errors

    const errosMsgs = errors.array().map(err => err.msg);

    const message = errosMsgs.join('. ');

    return res.status(400).json({ status: 'error', message });
  }

  next();
};

const createUserValidators = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('age').isNumeric().withMessage('The age cannot be empty'),
  body('email').isEmail().withMessage('The email cannot be empty'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').isAlphanumeric().withMessage('Password must contain ccletters and numbers'),
  checkResult,
];

module.exports = { createUserValidators };