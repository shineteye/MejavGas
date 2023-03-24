const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

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