const pg = require("pg")

const database = new pg.Client("postgres://wivobzes:I28edTqLuGw6OOnI9nbepH51UbzPz4FR@babar.db.elephantsql.com/wivobzes")

database.connect((erro)=>{
if(erro){
    return console.log("Não deu bpm de SQL")
}else {
    return console.log("DEU BOM SQL")
}

})

module.exports = database