const database = require('../model/dbase');

exports.atualizarCerveja = (req, res) => {
    console.log('Eu estou chegando aqui');

    const query =
        "UPDATE cervejas SET nome = $2, abv = $3, tipo = $4, nacionalidade = $5 WHERE id = $1;";
    const values = [req.params.id, req.body.nome, req.body.abv, req.body.tipo, req.body.nacionalidade];
    console.log(values);

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Atualizado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: 'Erro ao atualizar: ' + erro.message });
        });
};
