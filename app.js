require('dotenv').config()

const consign = require('consign')
const express = require('express')
const app = express()

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
