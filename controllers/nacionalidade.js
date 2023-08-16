const database = require('../model/dbase')


exports.nacionalidade=(req, res) => {
    const id = req.params.id
    console.log(id)
database.query(`SELECT * FROM cervejas WHERE NACIONALIDADE = '${id}';`).then(

(resultado)=>{
    res.status(200).send({cervejas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}