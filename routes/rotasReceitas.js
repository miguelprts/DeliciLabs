var express = require('express');
var router = express.Router();
const controller = require('../controller/aplicacao/controllerReceitas')

router.get('/novaReceita', controller.novaReceita)
router.post('/novaReceita', controller.novaReceita_post)

router.get('/visualizarReceita/:_id', controller.visualizarReceita);
router.get('/visualizarReceitasApi/:id', controller.visualizarReceitaApi);

router.get('/atualizarReceita/:_id', controller.atualizarReceita);
router.post('/atualizarReceita/:_id', controller.atualizarReceita_post);

router.get('/deletarReceita/:_id', controller.deletarReceita);
 
module.exports = router;