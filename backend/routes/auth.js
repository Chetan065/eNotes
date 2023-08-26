const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'HelloGreatUser$100'
var userinfo = require('../middleware/userinfo')

//Endpoint 1 : Signup for a user
router.post('/createuser', [
    body('name', 'name length min 4').isLength({ min: 4 }),
    body('email', 'Insert a valid Email').isEmail(),
    body('password', 'password length min 4').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ error: "user already exists!" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    res.json({ authtoken })
})

// Endpoint 2 : Login of User

router.post('/login', [
    body('email', 'Email is not valid').isEmail(),
    body('password', 'Password is required').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ wrong: "Please login with correct credentials !" })
        }
        const correct = await bcrypt.compare(password, user.password)
        if (!correct) {
            return res.status(400).json({ wrong: "Please login with correct credentials !" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({ authtoken })

    } catch (error) {
        res.status(404).send("Server did not respond !");
    }
})

// Endpoint 3 : Fetching User Information 

router.post('/info', userinfo , 
    async (req, res) => {

        try {
            userID = req.user.id;
            const user = await User.findById(userID).select("-password")
            res.send(user)
        } catch (error) {
            res.status(404).send("Server did not respond !");
        }
    })

module.exports = router