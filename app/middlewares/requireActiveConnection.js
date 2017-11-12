module.exports = app => {
    return (req, res, next) => {
        const { connectionList } = app.domain
        const connectionId = req.params.id

        const currentConnection = connectionList.get(connectionId)

        if (!currentConnection) {
            let err = new Error('connection_not_exists')
            err.status = 401
            return next(err)
        }

        next()
    }
}
