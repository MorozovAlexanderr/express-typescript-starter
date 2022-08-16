import { body, ValidationChain } from 'express-validator';

export const createUserValidation: ValidationChain[] = [
  body('name')
    .isString()
    .isLength({ min: 5 })
    .withMessage('Must be at least 5 chars long'),
  body('email').isEmail(),
  body('password')
    .isString()
    .isLength({ min: 7 })
    .withMessage('Must be at least 7 chars long'),
];
