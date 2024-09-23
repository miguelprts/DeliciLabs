const modelMinhasReceitas = require('../../models/src/model_Crud_Receitas')

exports.criarReceitas = async function(req,res) {
    await modelMinhasReceitas.adicionarReceita(req.body);

    res.json({
        "mensagem": "Sua Receita foi criada com sucesso!"
    })
}
exports.visualizarReceitas = async function(req, res) {
    var receitas = await modelMinhasReceitas.pegarReceitas();

    res.json(receitas)
}
exports.visualizarUmaReceita = async function(req, res) {
    var receita = await modelMinhasReceitas.visualizarUmaReceita(req.params._id);

    res.json(receita);
}
exports.editarUmaReceita = async function(req, res) {
    await modelMinhasReceitas.editarReceita(req.body);

    res.json({
        "mensagem":"Atualização feita corretamente!"
    })
}
exports.deletarUmaReceita = async function(req, res) {
    await modelMinhasReceitas.deletarReceita(req.params._id)

    res.json({
        "mensagem":"Exclusão concluída com sucesso!"
    })
}