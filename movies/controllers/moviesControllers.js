const axios = require('axios');
const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel');


const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY


 const getMovies =   async(req, res) => {
    
        try {
            const response = await axios.get(`${BASE_URL}api_key=${API_KEY}`);
            const movies = response.data.results;
            res.json(movies);
            console.log(res)
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        }

const createMovies = asyncHandler(async (req, res) => {

    //Desestructuramos el body
    const { title, overview } = req.body

    //verificamos que nos pasen todos los datos necesarios para crear una pelicula
    if (!title || !overview ) {
        res.status(400)
        throw new Error('Faltan datos')
    }

    //Verificar que esa pelicula no exista a traves de su titulo 
     const titleExiste = await Movie.findOne({ title })
    if (titleExiste) {
        res.status(400)
        throw new Error('Esa pelicula ya existe en la base de datos')
    }
 
    

    //Crear el pelicula
    const movie = await Movie.create({
        title,
        overview
    })

    if (movie) {
        res.status(201).json({
            _id: movie.id,
            title: movie.title,
            email: movie.overview
        })
    } else {
        res.status(400)
        throw new Error('No se pudieron guardar los datos')
    }

  
})
      
    
module.exports = {
    getMovies,
    createMovies
} 


