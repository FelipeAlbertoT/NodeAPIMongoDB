exports.bookValidator = (req, res, next) => {
    req.check('title', 'Why no title?').notEmpty()
    req.check('author', 'Why no author?').notEmpty()
    req.check('category', 'Why no category?').notEmpty()

    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        res.status(400).json({ error: firstError })
    }

    next()
}