const {conectarAoBanco, baseDeDados} = require('../config/configMongo');
const mongodb = require('mongodb')

class ModelReceitas {
    async adicionarReceita(receita) {
        await conectarAoBanco();
        const collection = baseDeDados().collection("Minhas_Receitas");
        await collection.insertOne(receita);
    }
    async visualizarUmaReceita(_id){
        await conectarAoBanco();
        const collection = baseDeDados().collection("Minhas_Receitas");
        const receita = await collection.findOne({ _id: new mongodb.ObjectId(_id) })
        return receita
    }
    async editarReceita(receita){
        await conectarAoBanco();
        const collection = baseDeDados().collection("Minhas_Receitas")
        var id = receita._id
        await collection.updateOne(
            { _id: new mongodb.ObjectId(id)},
            { $set: {receita: receita.receita, categoria:receita.categoria, url_imagem:receita.url_imagem, ingredientes:receita.ingredientes, modo_de_preparo:receita.modo_de_preparo} }
        )
    }
    async deletarReceita(id){
        await conectarAoBanco()
        const collection = baseDeDados().collection("Minhas_Receitas")
        const receita = await collection.findOne({ _id: new mongodb.ObjectId(id)})
        if (!receita) {
            throw new Error(`Não existe nenhuma receita com o ID: ${id}`)
        } else {
            await collection.findOneAndDelete({ _id: new mongodb.ObjectId(id)})
        }
    }
    async pegarReceitas(){
        await conectarAoBanco();
        const collection = baseDeDados().collection("Minhas_Receitas");
        var receitas = await collection.find({}).toArray()
        return receitas
    }
}
module.exports = new ModelReceitas();