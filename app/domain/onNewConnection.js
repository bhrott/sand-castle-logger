module.exports = app => {
    return socket => {
        socket.on('disconnect', () => {})
        socket.emit('connection:success', { id: socket.id })
    }
}
