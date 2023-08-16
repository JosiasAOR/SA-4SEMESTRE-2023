const database = require('../model/dbase')

exports.cerveja1=(req, res) => {
    const id = req.params.id
    console.log(id)
database.query(`SELECT * FROM cervejas WHERE NOME LIKE  '%${id}%';`).then(

(resultado)=>{
    res.status(200).send({cervejas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}

 
)
}