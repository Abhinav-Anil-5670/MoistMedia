const express = require('express')

const router = express.Router()

const bcrypt = require('bcrypt');

const userModel = require('../models/user.model')


router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            username,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User created",
            user: {
                _id: user._id,
                username: user.username
                
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





module.exports = router