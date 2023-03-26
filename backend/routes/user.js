const express = require('express');

const router = express.Router();

const { createUser, userSignIn, orderGas } = require('../controllers/user');
const { isAuth } = require('../middleware/auth');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user')

router.post("/create", validateUserSignUp, userValidation, createUser);
router.post("/login", validateUserSignIn, userValidation, userSignIn);
router.post('/create-post', isAuth, (req, res) => {
    res.send('welcome to secret route')
})
router.post("/order", orderGas);


module.exports = router;