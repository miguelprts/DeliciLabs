const model_ApiExterna = require('../../models/src/model_ApiExterna')
const modelMinhasReceitas = require('../../models/src/model_Crud_Receitas')

exports.index = async function(req, res) {
    coisas = {
        title: "DeliciLabs"
    }
    res.render('index/index', coisas)
}

exports.tela_explorar = async function(req, res) {
    var receitasApi = await model_ApiExterna.pegarDados();
    var minhasReceitas = await modelMinhasReceitas.pegarReceitas();
    
    coisas = {
        title: "Explore Receitas!",
        receitasApi: receitasApi,
        minhasReceitas: minhasReceitas
    }
    res.render('index/explorar', coisas)
}

exports.tela_suasReceitas = async function(req,res) {

    var minhasReceitas = await modelMinhasReceitas.pegarReceitas();

    coisas = {
        title: "Suas Receitas",
        minhasReceitas: minhasReceitas
    }
    res.render('index/suasReceitas', coisas)
}