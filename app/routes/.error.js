module.exports = app => {
    return (err, req, res, next) => {
        if (process.env.NODE_ENV === 'development') {
            res.locals.message = err.message
            res.locals.error = err

            // render the error page
            res.status(err.status || 500)
            res.render('error')
        } else {
            res.status(err.status || 500)
            res.render('error', { message: 'Ooops =(' })
        }
    }
}
