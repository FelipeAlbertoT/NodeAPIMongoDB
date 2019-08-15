const Book = require('../models/Book.model')

exports.getBooks = (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(error => res.status(400).json({ error }))
}

exports.createBook = (req, res) => {
    Book.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(error => res.status(400).json({ error }))
}

exports.getBook = (req, res) => {
    Book.findOne({ _id: req.params.id })
    .exec((err, book) => {
        if(err, !book) {
            return res.status(404).json({ error: "Book not found!" })
        }
        res.json(book)
    })
}

exports.updateBook = (req, res) => {
    const query = { _id: req.params.id }
    const update = { $set: { 
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    }}
    const options = { upsert: true, new: true, useFindAndModify: false }
    Book.findByIdAndUpdate(
        query, update, options, 
        (error, book) => {
            if(error) {
                return res.status(404).json({ error: "Book not found!" })
            }
            res.json(book)
        }
    )
}

exports.deleteBook = (req, res) => {
    Book.findByIdAndRemove({ _id: req.params.id })
    .exec((err, result) => {
        if(err || !result) {
            return res.status(404).json({ error: "Book not found!" })
        }
        res.sendStatus(204)
    })
}
