const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    overview: {
        type: String,
        require: true
    },
    popularity: {
        type: String,
        require: true
    },
    vote_average: {
        type: Number,
        require: true
    },
    vote_count: {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('Movie', movieSchema)