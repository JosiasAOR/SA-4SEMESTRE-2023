const database = require('../model/dbase')

exports.cadastroCerveja=(req, res) => {
    console.log('eu to chegando aqui')

const query =
"INSERT INTO cervejas (id, nome,abv,tipo,nacionalidade) VALUES ($1,$2,$3,$4,$5);"
const values = [req.body.id, req.body.nome, req.body.abv, req.body.tipo, req.body.nacionalidade]
console.log(values)
database.query(query, values).then(
    ()=>{
        res.status(200).send({mensagem: 'gravou com sucesso'});
    },
    (erro)=>{
        res.status(erro).send({erro: "erro"});
    }
)

}
/////////////////////////////

