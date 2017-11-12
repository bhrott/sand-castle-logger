module.exports = app => {
    return (id, data) => {
        const { connectionList } = app.domain

        const currentConnection = connectionList.get(id)

        currentConnection.emit('log:new', data)
    }
}
