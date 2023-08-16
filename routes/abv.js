const express = require('express')
const router = express.Router()
const controller = require('../controllers/abv')

router.get('/', controller.maior)


module.exports = router