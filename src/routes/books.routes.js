const express = require('express')
const validator = require('../validators')
const { getBooks, createBook, getBook, updateBook, deleteBook } = require('../controllers/books.controller')

const router = express.Router()

router.get('/', getBooks)
router.post('/', validator.bookValidator, createBook)
router.get('/:id', getBook)
router.put('/:id', validator.bookValidator, updateBook)
router.delete('/:id', deleteBook)

module.exports = router;