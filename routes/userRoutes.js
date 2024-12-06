const express = require('express')
const checkAndAddUser = require('../controllers/userController')
const router = express.Router()

router.post('/users/check-and-add/', checkAndAddUser)

module.exports = router