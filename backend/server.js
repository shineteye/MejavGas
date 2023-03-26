const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const userRouter = require('./routes/user');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
require('./model/db');
const bcrypt = require("bcrypt");


const User = require('./model/user')
// const passport = require("")
// const initializePassport = require("./passport-config")
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

app.use(userRouter);


const users = [{
    name: "Shine",
    email: "shine@gmail",
    phone: "0123456789",
    password: "heal"
}];
const orders = [{
    location: "amamoma",
    hostel: "peace",
    amount: 10
}]


app.get("/test", async (req, res) => {
    res.send("Hello Test Worked")
})



app.get("/oredr", async (req, res) => {
    res.send('Login route hit')
})


app.post("/order", async (req, res) => {
    try {
        orders.push({
            id: Date.now().toString(),
            location: req.body.location,
            hostel: req.body.hostel,
            amount: req.body.total
        })
        console.log(orders);
        res.json({
            success: true,
            message: "order placed succesfully."
        })
    } catch (error) {
        console.log(error)
    }
})


// app.post("/register", async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         users.push({
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             phone: req.body.phone,
//             password: hashedPassword
//         })
//         console.log(users);
//         res.json({
//             success: true,
//             message: "User successfully logged in."
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

app.get("/register", async (req, res) => {
    res.send("Hello There")

})


app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})

