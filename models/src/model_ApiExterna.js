const axios = require('axios');

class ModelApiExterna {
    async pegarDados() {
        var receitas
        try {
            // Fazendo requisição à API externa
            const response = await axios.get('https://api-receitas-pi.vercel.app/receitas/todas');
            receitas = response.data;
        }
        catch(error){
            console.log(error)
        }
        console.log(receitas)
        return receitas
    }

    async visualizarReceita(id){
        var receita
        try {
            // Fazendo requisição à API externa
            const response = await axios.get(`https://api-receitas-pi.vercel.app/receitas/${id}`);
            receita = response.data;        
        }catch(Error){
            console.log(Error);
        }
        return receita;
    }

} module.exports = new ModelApiExterna();