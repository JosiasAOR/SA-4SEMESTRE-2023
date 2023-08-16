const database = require('../model/dbase');

exports.deletarCerveja = (req, res) => {
    console.log('Eu estou chegando aqui');

    const query = "DELETE FROM cervejas WHERE id = $1;";
    const values = [req.params.id];
    console.log(values);

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Registro excluído com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: 'Erro ao excluir: ' + erro.message });
        });
};
