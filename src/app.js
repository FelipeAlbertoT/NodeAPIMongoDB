const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')
const booksRouter = require('./routes/books.routes')

dotenv.config()

//DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log("DB connected."))

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())

app.use('/books', booksRouter)

app.listen(process.env.PORT || 3000)