const express = require("express");
const bodyParser = require('body-parser')
const bcrypt = require("bcrypt");
const cors = require("cors");
const passport = require("")
const initializePassport = require("./passport-config")


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const users = ["think"];


app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })
        console.log(users);
        res.json({
            success: true,
            message: "User successfully logged in."
        })

    } catch (error) {
        console.log(error)
    }
})

app.get("/register", async (req, res) => {
    res.send("Hello There")

})



app.listen(3000, () => {
    console.log("Server running on port 3000");
})

