require ("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connection = require('./connection')

const app = express()

connection()

const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(require('./src/Routes/character.routes'))

app.listen(port || 4700, () => console.log(
    `Servidor corriendo en http://localhost:${port || 4700}`
))