const router = require('express').Router();
const User = require('../models/user');
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

router.post('/register', async (req, res) => {
    try {
        const userExist = await User.findOne({ name: req.body.name });
        if (userExist) return res.status(400).send("User already exists");

        if(req.body.name != "admin") return res.send("New user can't be created, please contact admin");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            password: hashedPassword
        });
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userExist = await User.findOne({ name: req.body.name });
        if (!userExist) return res.status(400).send("User does not exist");

        const validPass = await bcrypt.compare(req.body.password, userExist.password);
        if (!validPass) return res.status(400).send("Invalid password");

        const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET);
        res.cookie("auth-token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" }).send(token);

    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/logout', verifyToken, async (req, res) => {
    try {
        res.clearCookie("auth-token").send("Logged out");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;