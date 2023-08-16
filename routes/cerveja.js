const express = require('express')
const router = express.Router()
const controller = require('../controllers/cerveja')
const controller2 = require('../controllers/cadastroCerveja')
const controller3 = require('../controllers/editarCerveja')
const controller4 = require('../controllers/deletarCerveja')

router.get('/:id', controller.cerveja1)
router.post('/cadastro', controller2.cadastroCerveja)
router.put('/editar/:id', controller3.atualizarCerveja)
router.delete('/deletar/:id', controller4.deletarCerveja)


module.exports = router