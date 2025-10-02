const express = require('express')

const router = express.Router()

const {regsiterController} = require('../controllers/auth.controller')


router.post('/register',regsiterController)





module.exports = router