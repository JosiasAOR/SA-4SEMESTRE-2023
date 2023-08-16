const database = require('../model/dbase')


exports.maior=(req, res) => {
database.query(`SELECT * FROM cervejas ORDER BY ABV DESC;`).then(

(resultado)=>{
    res.status(200).send({cervejas: resultado.rows});
}, (erro)=>{
    res.status(500).send({erro: erro})
}


)
}