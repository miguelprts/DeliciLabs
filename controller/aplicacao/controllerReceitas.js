const modelMinhasReceitas = require('../../models/src/model_Crud_Receitas')

exports.novaReceita = async function(req,res) {
    res.render('receitas/inserirReceita', {title: "Nova Receita"})
}
exports.novaReceita_post = async function(req,res) {
    
}
exports.visualizarReceita = async function(req,res) {
    
}
exports.atualizarReceita = async function(req,res) {
    var receita = await modelMinhasReceitas.visualizarUmaReceita(req.params._id)

    res.render('receitas/editarReceitas', {title: "Nova Receita", receita: receita})
}
exports.atualizarReceita_post = async function(req,res) {
    
}
exports.deletarReceita = async function(req,res) {
    
}