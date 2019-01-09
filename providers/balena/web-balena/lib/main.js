const express = require('express')
const app = express()
const handlers = require('./handlers')

app.get('/', function (req, res) {
  res.send(handlers.defaultRoute())
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))
