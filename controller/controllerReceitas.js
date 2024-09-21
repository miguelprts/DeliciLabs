exports.tela_explorar = async function(req, res) {
    coisas = {
        title: "Explore Receitas!"
    }
    res.render('explorar/explorar', coisas)
}