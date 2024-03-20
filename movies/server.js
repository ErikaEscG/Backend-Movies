const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const colors = require('colors')
/* const connectDB = require('./config/db')

connectDB() */

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/moviesRoutes'))

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port} ${process.env.BASE_URL}`))

//app.use('/api/movies', require('./routes/moviesRoutes'))


