module.exports = app => {
    return (req, res, next) => {
        const error = Error('not_found')
        next(error)
    }
}
