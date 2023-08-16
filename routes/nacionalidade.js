const express = require('express')
const router = express.Router()
const controller = require('../controllers/nacionalidade')

router.get('/:id', controller.nacionalidade)


module.exports = router