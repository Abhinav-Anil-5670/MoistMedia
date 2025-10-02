const express = require('express')

const router = express.Router()

const {regsiterController,loginController} = require('../controllers/auth.controller')


router.post('/register',regsiterController)

router.post('/login',loginController)





module.exports = router