const _ = require('lodash')

module.exports = app => {
    function getClientAuthToken(req) {
        try {
            return req.headers.authorization.replace('Bearer', '').trim()
        } catch (error) {
            return null
        }
    }

    function getRequiredAuthToken(req) {
        const options = app.get('options') || {}
        const { id } = req.params

        return _.get(options, `clientAuthToken.${id}`)
    }

    return (req, res, next) => {
        const requiredAuthToken = getRequiredAuthToken(req)

        if (!requiredAuthToken) {
            return next()
        }

        const clientAuthToken = getClientAuthToken(req)

        if (requiredAuthToken === clientAuthToken) {
            return next()
        }

        res.status(401).end()
    }
}
