const { check, validationResult } = require('express-validator')

exports.validateUserSignUp = [
    // check('fullname')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Name is required!')
    //     .isString()
    //     .withMessage('Must be a valid name!')
    //     .isLength({ min: 3, max: 20 })
    //     .withMessage('Name must be within 3 to 20 character!'),
    // check('email').normalizeEmail().isEmail().withMessage('Invalid email!'),
    // check('password')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Password is empty!')
    //     .isLength({ min: 8, max: 20 })
    //     .withMessage('Password must be 3 to 20 characters long!'),
    // check('phone').trim().not().isEmpty().withMessage('Phone number?'),
    // check('password').trim().isEmpty().not().isLength({ min: 4, max: 20 }).withMessage('Password must be 8 to 20 chars long')
];

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next();

    const error = result[0].msg;
    res.json({ success: false, message: error })
};

exports.validateUserSignIn = [
    check('email').trim().isEmail().withMessage('email / password required'),
    check('password').trim().not().isEmpty().withMessage('email / password is required')
]

