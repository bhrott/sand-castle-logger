module.exports = app => {
    const connections = {}

    const sanitizeNamespace = namespace => {
        let sanitized = namespace || ''

        if (sanitized.indexOf('/') === 0) {
            return sanitized
        }

        return `/${sanitized}`
    }

    const get = namespace => {
        return connections[sanitizeNamespace(namespace)]
    }

    const join = pNamespace => {
        const namespace = sanitizeNamespace(pNamespace)

        if (!!get(namespace)) {
            return { namespace }
        }

        const { onNewConnection } = app.domain

        const server = app.get('socket-server')
        const nsp = server.of(namespace)

        nsp.on('connection', onNewConnection)

        connections[namespace] = nsp

        return { namespace }
    }

    return {
        get,
        join
    }
}
