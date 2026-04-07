const express = require('express')
const router  = express.Router()
const {registeruser,getalluser,edituser,deleteuser,loginuser} = require('../controller/user.controller')


router.post('/register', registeruser)

router.get('/getall',getalluser)

router.put('/update-user',edituser)

router.delete('/delete-user',deleteuser)

router.post('/login',loginuser)

module.exports= router