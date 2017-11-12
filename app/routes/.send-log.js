module.exports = app => {
    return (req, res, next) => {
        const { body } = req
        const { id } = req.params
        const { sendLog } = app.domain

        sendLog(id, body)

        res.status(201).end()
    }
}
