const axios = require('axios');

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
      
        
        
    
module.exports = {
    getMovies
} 


