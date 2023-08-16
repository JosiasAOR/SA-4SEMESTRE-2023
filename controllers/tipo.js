const database = require('../model/dbase')


exports.tipo=(req, res) => {
    const id = req.params.id
database.query(`SELECT * FROM cervejas WHERE TIPO = '${id}';`).then(

(resultado)=>{
    res.status(200).send({cervejas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}