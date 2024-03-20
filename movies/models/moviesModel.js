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
        require: false
    },
    vote_average: {
        type: Number,
        require: false
    },
    vote_count: {
        type: Number,
        require: false
    }

})

module.exports = mongoose.model('Movie', movieSchema)