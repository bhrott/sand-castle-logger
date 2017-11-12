module.exports = app => {
    return (req, res, next) => {
        const { connectionList } = app.domain
        const { namespace } = req.params

        const result = connectionList.join(namespace)

        res.status(200).json({
            namespace: result.namespace
        })
    }
}
