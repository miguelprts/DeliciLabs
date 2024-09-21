var express = require('express');
var router = express.Router();
const controller = require('../controller/controllerUsuario')

router.get('/', controller.tela_usuario)

module.exports = router;
