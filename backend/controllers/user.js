const jwt = require('jsonwebtoken');
const User = require('../model/user');
const accountSid = process.env.ACCOUNT_SSID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

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
    const user = await User.findOne({ email });
    phone = user.phone
    await res.json({ success: true, message: "order route", data: req.body })
    console.log(req.body);

    client.messages
        .create({
            body: `MEJAV Gas Notification Testing\nlocation:${location},\n hostel:${hostel},\n amount:${total},\n phone: 0${phone}, size:${cylinderSize}`,
            from: '+14406643186',
            to: '+233557793777'
        })
        .then(message => console.log(message.sid)).catch((err) => { console.log(err) })

    // client.messages
    //     .create({
    //         body: `Hi Enyonam\n
    //         Your request to join the Data Science batch for the April-June 2023 cohort has been approved\n
    //         Your parcel has arrived here in Cape Coast\n
    //         Contact +233209836800 for details on the delivery of the package\n
    //         `,
    //         from: '+14406643186',
    //         to: '+233209755881'
    //     })
    //     .then(message => console.log(message.sid)).catch((err) => { console.log(err) })
}