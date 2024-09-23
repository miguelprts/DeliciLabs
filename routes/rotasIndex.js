var express = require('express');
var router = express.Router();
const controller = require('../controller/aplicacao/controllerIndex')

/* GET home page. */
router.get('/', controller.index);
router.get('/explorar', controller.tela_explorar);
router.post('/explorar', controller.tela_explorar_post)
router.get('/suasReceitas', controller.tela_suasReceitas)

module.exports = router;