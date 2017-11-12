const cache = require('memory-cache')

module.exports = app => {
    const defaultCacheTime = 1000 * 60 * 24 //24 hours

    return {
        put: (key, value, duration) => {
            cache.put(key, value, duration || defaultCacheTime)
        },
        get: key => {
            return cache.get(key)
        },
        remove: key => {
            cache.del(key)
        },
        clear: () => {
            cache.clear()
        }
    }
}
