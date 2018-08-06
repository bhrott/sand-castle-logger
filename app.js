require('dotenv').config()

const consign = require('consign')
const express = require('express')
const app = express()

function loadOptions() {
    let options = {}

    try {
        options = require('./options.json')
    } catch (error) {
        console.log('Custom options not found, using the defaults...')
    }

    app.set('options', options || {})
}

loadOptions()

consign({
    cwd: 'app'
})
    .then('config')
    .then('services')
    .then('domain')
    .then('middlewares')
    .then('routes')
    .into(app)

module.exports = app
