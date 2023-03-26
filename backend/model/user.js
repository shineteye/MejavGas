const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    phone: {
        type: Number,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    }
})

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) return next(err);
            this.password = hash;

            next();
        })
    }
})

userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is missing, cant compare');

    try {
        const result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        console.log('Error comparing passwords', error.message)
    }
}

userSchema.statics.isThisEmailInUSe = async function (email) {
    if (!email) throw new Error('invalid email')
    try {
        const user = await this.findOne({ email })
        if (user) return false

        return true;
    } catch (error) {
        console.log("error found in isthisemailinuse funciton", error.message);
        return false
    }
}

module.exports = mongoose.model('User', userSchema)