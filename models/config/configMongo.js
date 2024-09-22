const mongodb = require('mongodb');

const perfilMongo = mongodb.MongoClient;
var url;

const conectarAoBanco = async () => {
    if (!url) {
        url = await perfilMongo.connect('mongodb://127.0.0.1:27017');
    }
    return url;
};

// Retorna a referência para o banco de dados da aplicação
const baseDeDados = () => {
    return url.db('DeliciLabs');
};

module.exports = {
    conectarAoBanco, baseDeDados
};