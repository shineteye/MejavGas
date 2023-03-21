const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors")
// const jwt = require('json')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
    {
        id: 1,
        name: 'cisco',
        email: 'user1@example.com',
        phone: '023',
        password: 'user1',
    },
    {
        id: 2,
        name: 'kube',
        email: 'user2@example.com',
        phone: '024',
        password: 'user2',
    },
]

app.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (users.find(users => users.email === email)) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const id = users.length + 1;

        const newUser = {
            id, name, email, phone, password
        }
        users.push(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(user => user.email === email);
        const passwordMatch = user.password === password;
        console.log(req.body);
        console.log(user);
        console.log(passwordMatch);

        if (!user.email === email) {
            return res.status(401).json({ error: 'Incorrect email' })
        }
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrectpassword' })
        }

        res.json({
            success: true,
            message: "User successfully logged in."
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }

})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})