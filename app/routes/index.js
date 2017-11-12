const indexRoute = require('./.index')
const sendLogRoute = require('./.send-log')
const joinRoute = require('./.join')
const notFoundRoute = require('./.not-found')
const errorRoute = require('./.error')

module.exports = app => {
    const { requireActiveConnection } = app.middlewares

    app.get('/', indexRoute(app))
    app.post('/join/:namespace', joinRoute(app))
    app.post('/api/log/:id', requireActiveConnection, sendLogRoute(app))

    app.use(notFoundRoute(app))
    app.use(errorRoute(app))
}
