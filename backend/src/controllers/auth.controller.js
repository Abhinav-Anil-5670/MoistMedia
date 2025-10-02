const userModel = require('../models/user.model')

const bcrypt = require('bcrypt');


const jwt = require('jsonwebtoken')

async function regsiterController(req,res) {
    try {
        const { username, password } = req.body;


        const existingUser = await userModel.findOne({
            username
        })

        if(existingUser){
            return res.status(409).json({
                message : "Username already exists"
            })
        }

        
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            username,
            password: hashedPassword
        });

        const token = jwt.sign({
            id : user._id
        },process.env.JWT_SECRET)

        res.cookie('token',token)

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
}

module.exports = {
    regsiterController
}