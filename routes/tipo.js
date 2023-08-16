const express = require('express')
const router = express.Router()
const controller = require('../controllers/tipo')

router.get('/:id', controller.tipo)



module.exports = router