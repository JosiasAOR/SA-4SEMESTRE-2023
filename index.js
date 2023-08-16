const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const cervejaRoutes = require('./routes/cerveja')
const nacionalidadeRoutes = require('./routes/nacionalidade')
const tipoRoutes = require('./routes/tipo')
const abvRoutes = require('./routes/abv')

const app = express()
app.use(bodyParser.json())

// Cadastrando as rotas
app.use('/cervejas', cervejaRoutes)
app.use('/nacionalidade', nacionalidadeRoutes)
app.use('/abv', abvRoutes)  
app.use('/tipo', tipoRoutes)

app.listen(port, () => {
    console.log(`API de cervejas: ${port}`)
})
