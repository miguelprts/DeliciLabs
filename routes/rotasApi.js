var express = require('express');
var router = express.Router();
const controller = require('../controller/api/controllerApi.js')

/* GET home page. */
router.get('/', controller.visualizarReceitas);

router.post('/criarReceita', controller.criarReceitas);

router.get('/visualizarUmaReceita/:_id', controller.visualizarUmaReceita);

router.put('/editarUmaReceita/:_id', controller.editarUmaReceita);

router.delete('/deletarUmaReceita/:_id', controller.deletarUmaReceita);

module.exports = router;