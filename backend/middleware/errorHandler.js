// ? This is my special error handling middleware that catches my errors.

// ? Error handling has an additional first arg, for the error
const errorHandler = (err, req, res, next) => {
    // ? Error handling goes in here...
    console.log('🤖 There was an error.')
    console.log(err.name)
    console.log(err)

    // ? Specific error handling, for certain kinds of errors.
    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid parameter given' })
    }
    // ? Not found errors..
    if (err.name === 'NotFound') {
        return res.status(404).json({ message: 'Not found' })
    }

    // ? 500 means internal server error
    res.sendStatus(500)
    // ? call my next function
    next(err)
}

module.exports = errorHandler