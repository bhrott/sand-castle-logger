module.exports = app => {
    return (req, res, next) => {
        res.render('index', { title: 'Sand Castle Logger' })
    }
}
