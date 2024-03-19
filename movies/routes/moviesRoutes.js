const express = require('express')
const router = express.Router();

//CRUD

//Get
router.get('/', getMovies)

//Creat
router.post('/', createMovies)


//Delete
router.delete('/:id', deleteMovies)

module.exports = router