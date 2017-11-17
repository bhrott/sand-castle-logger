const moment = require('moment')

module.exports = app => {
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4()
    }

    function hydrateLog(logData) {
        logData.metadata = Object.assign(
            {
                type: 'info',
                icon: null,
                uuid: guid()
            },
            logData.metadata
        )

        logData.metadata.date = moment().format('YYYY-MM-DD HH:mm:ss:SSS')

        return logData
    }

    return (id, data) => {
        const { connectionList } = app.domain

        const currentConnection = connectionList.get(id)

        const formattedData = hydrateLog(data)

        currentConnection.emit('log:new', formattedData)
    }
}
