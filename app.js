const express = require('express')
const app = express()
const adminDataRoute = require('./route')

app.use('/',adminDataRoute)

app.listen(process.env.PORT || 5000)
