const express = require('express')
const app = express()
const handlers = require('./handlers')

app.get('/', function (req, res) {
  res.send(handlers.defaultRoute())
})

app.post('/createPod', function (req, res) {
  res.sendStatus(200)
})

app.delete('/deletePod', function (req, res) {
  res.sendStatus(404)
})

app.get('/getContainerLogs', function (req, res) {
  res.sendStatus(404)
})

app.get('/getPodStatus', function (req, res) {
  res.sendStatus(404)
})

app.get('/getPods', function (req, res) {
  res.sendStatus(404)
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))
