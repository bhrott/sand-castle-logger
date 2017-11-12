module.exports = app => {
    return (err, req, res, next) => {
        res.status(err.status || 500)
        res.locals.message = err.message
        res.locals.error = err

        if (req.xhr) {
            res.json(err)
        } else {
            res.render('error')
        }
    }
}
