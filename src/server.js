const express = require('express')
// const path = require('path')

const app = express()

const db = require('./database/db')

// conexão com banco de dados 

db.connect()


const routes = require('./routes/routes')

// habilita server para receber dados via post (form)

app.use(express.urlencoded({express: true}))


// habilitando rotas


app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))