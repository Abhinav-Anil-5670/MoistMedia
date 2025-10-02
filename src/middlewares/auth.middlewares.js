const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')

async function authMiddleware(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message : "Unauthorized, Please login"
        })
    }

    try{
        //returns error, if token is wrong
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findOne({
            _id : decoded.id
        })

        //moves to  postController
        req.user = user
        next()
    }
    catch(err){
        return res.status(401).json({
            message : "Invalid token, Please login again"
        })
    }
}

module.exports = authMiddleware