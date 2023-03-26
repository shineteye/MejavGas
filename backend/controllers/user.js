const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.createUser = async (req, res) => {
    console.log(req.body)
    const { fullname, email, phone, password } = req.body;
    console.log('controller', req.body);
    const isNewUser = await User.isThisEmailInUSe(email);

    if (!isNewUser) return res.json({
        success: false,
        message: 'Email already in use, sign-in '
    })
    const user = await User({
        fullname,
        email,
        phone,
        password
    });
    await user.save();
    res.json({
        message: "Account created successfully",
        data: user,
        success: true
    });
};

exports.userSignIn = async (req, res) => {
    console.log("Log in section")
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.json({ success: false, message: "user not found" })

    const isMatch = await user.comparePassword(password)
    if (!isMatch)
        return res.json({
            success: false,
            message: "email or password doesnt match"
        });
    const token = jwt.sign({
        userId: user._id
    },
        process.env.JWT_SECRET,
        { expiresIn: '1d' });
    console.log(1);
    res.json({ success: true, user: user, token })

};

exports.orderGas = async (req, res) => {
    console.log('order Section');
    const { location, hostel, total, email, cylinderSize } = req.body;
    await res.json({ success: true, message: "order route", data: req.body })
    console.log(req.body);
};