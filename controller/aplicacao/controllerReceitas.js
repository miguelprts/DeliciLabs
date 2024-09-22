const modelMinhasReceitas = require('../../models/src/model_Crud_Receitas')
const modelReceitasApi = require('../../models/src/model_ApiExterna')
const model_ApiExterna = require('../../models/src/model_ApiExterna')

exports.novaReceita = async function(req,res) {
    res.render('receitas/inserirReceita', {title: "Nova Receita"})
}
exports.novaReceita_post = async function(req,res) {
    await modelMinhasReceitas.adicionarReceita(req.body);
    res.redirect('/suasReceitas')    
}
exports.visualizarReceita = async function(req,res) {
    var receita = await modelMinhasReceitas.visualizarUmaReceita(req.params._id);
    
    res.render('receitas/visualizarReceita', {
        receita: receita,
        title: receita.receita
    })
}
exports.visualizarReceitaApi = async function(req, res) {
    var receita = await model_ApiExterna.visualizarReceita(req.params.id);

    res.render('receitas/visualizarReceita', {receita: receita, title: receita.receita, api: true})
}

exports.atualizarReceita = async function(req,res) {
    var receita = await modelMinhasReceitas.visualizarUmaReceita(req.params._id)

    res.render('receitas/editarReceitas', {title: "Atualizar Receita", receita: receita})
}
exports.atualizarReceita_post = async function(req,res) {
    var receita = req.body
    console.log(receita)
    await modelMinhasReceitas.editarReceita(receita)

    res.redirect('/suasReceitas')
    
}
exports.deletarReceita = async function(req,res) {
    await modelMinhasReceitas.deletarReceita(req.params._id);

    res.redirect('/suasReceitas')
}