const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

console.log(`Inciando en el puerto ${port}`)