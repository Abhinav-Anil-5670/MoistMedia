const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middlewares')
const multer = require("multer")
const {createPostController} = require('../controllers/post.controller')
const upload = multer({storage : multer.memoryStorage()})


//protected routes - only works, if token is available
router.post('/',
    authMiddleware, //req.user = userData
    upload.single("image"),
    createPostController)




module.exports = router