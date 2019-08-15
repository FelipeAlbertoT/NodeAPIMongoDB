const mongose = require('mongoose')

const bookSchema = new mongose.Schema({
    title: String,
    author: String,
    category: String,
})

module.exports = mongose.model('Book', bookSchema)