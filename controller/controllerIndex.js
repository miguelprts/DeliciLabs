exports.index = async function(req,res) {
    coisas = {
        title: "DeliciLabs"
    }

    res.render('index', coisas)
}