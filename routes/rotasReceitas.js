var express = require('express');
var router = express.Router();
const controller = require('../controller/controllerReceitas')

router.get('/explorar', controller.tela_explorar);



module.exports = router;