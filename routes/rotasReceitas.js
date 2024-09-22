var express = require('express');
var router = express.Router();
const controller = require('../controller/aplicacao/controllerReceitas')

router.get('/novaReceita', controller.novaReceita)
router.post('/novaReceita', controller.novaReceita_post)

router.get('/visualizar/:_id', controller.visualizarReceita);

router.get('/atualizar/:_id', controller.atualizarReceita);
router.post('/atualizar/:_id', controller.atualizarReceita_post);

router.get('/deletar/:_id', controller.deletarReceita);
 
module.exports = router;