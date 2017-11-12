const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

module.exports = app => {
    // view engine setup
    app.set('views', 'app/views')
    app.set('view engine', 'ejs')

    // uncomment after placing your favicon in /public
    app.use(favicon('app/public/favicon.ico'))
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static('app/public'))
    app.use(cors())
    app.use(helmet())
}
