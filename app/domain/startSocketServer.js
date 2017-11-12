const debug = require('debug')('domain')

module.exports = app => {
    return () => {
        const server = app.get('socket-server')
        debug('socket server started')
    }
}
