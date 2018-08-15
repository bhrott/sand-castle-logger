var list = new Vue({
    el: '#list',
    data: {
        logs: []
    },
    methods: {
        getContainerStyle: function (log) {
            return { 'border-color': log.metadata.color }
        },
        getTitleStyle: function (log) {
            return { 'color': log.metadata.color }
        }
    },
    filters: {
        pretty: function (value) {
            return JSON.stringify(value, null, 2)
        }
    }
})

var header = new Vue({
    el: '#header',
    data: {
        id: 'loading...',
        message: {
            text: 'loading...',
            visible: false,
            type: 'error'
        }
    },
    methods: {
        clear: function () {
            list.logs = []
        }
    }
})

var socket = null

function getParameterByName(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function insertParam(key, value) {
    key = encodeURI(key)
    value = encodeURI(value)

    var kvp = document.location.search.substr(1).split('&')

    var i = kvp.length
    var x
    while (i--) {
        x = kvp[i].split('=')

        if (x[0] == key) {
            x[1] = value
            kvp[i] = x.join('=')
            break
        }
    }

    if (i < 0) {
        kvp[kvp.length] = [key, value].join('=')
    }

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&')
}

function getCurrentNamespace() {
    var namespace = getParameterByName('t')

    if (!namespace) {
        insertParam('t', 'default')
        return getCurrentNamespace()
    }

    return namespace
}

function join() {
    var namespace = getCurrentNamespace()
    axios
        .post('/join/' + namespace)
        .then(function (res) {
            listen(res.data.namespace)
        })
        .catch(function (err) {
            console.error(err)
        })
}

function listen(namespace) {
    socket = io(namespace)
    socket.on('connection:success', function (msg) {
        header.id = namespace.replace('/', '')
    })

    socket.on('log:new', function (msg) {
        list.logs.unshift(msg)
    })

    socket.on('disconnect', function () {
        header.message = {
            text: 'Disconnected! Reload the page to reconnect.',
            visible: true,
            type: 'error'
        }
    })
}

join()
