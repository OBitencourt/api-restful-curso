const express = require('express')
const cors = require('cors')


const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()

// conexão com banco de dados 

db.connect()

// habilitar cors


const allowedOrigins = [
    'http://127.0.1:5500',
    'http://www.nossoapp.com',

]
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // mobile app

        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))


// habilita server para receber dados json

app.use(express.json())


// habilitando rotas


app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))