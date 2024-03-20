const express = require('express')
const router = express.Router();
const { getMovies } = require('../controllers/moviesControllers')

//CRUD

//Get
router.get('/api/movies', getMovies)

//Creat
/* router.post('/', createMovies)


//Delete
router.delete('/:id', deleteMovies) */

//Update
//router.update('/:id', deleteMovies) */

module.exports = router