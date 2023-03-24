const User = require('../model/user')

exports.createUser = async (req, res) => {
    res.json('hello')
    const { fullname, email, phone, password } = req.body;
    const isNewUser = await User.isThisEmailInUSe(email)

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
    res.json(user);
}