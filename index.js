const express = require('express')
const app = express()
const adminDataRoute = require('./route')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/',adminDataRoute)

app.listen(process.env.PORT || 5000)
