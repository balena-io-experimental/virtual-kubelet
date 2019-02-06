const express = require('express')
const app = express()
const handlers = require('./handlers')

app.get('/', function (req, res) {
  res.send(handlers.defaultRoute())
})

app.post('/createPod', function (req, res) {
  res.sendStatus(200)
})

app.put('/updatePod', function (req, res) {
  res.sendStatus(200)
})

app.delete('/deletePod', function (req, res) {
  res.sendStatus(200)
})

app.get('/getPod', function (req, res) {
  res.sendStatus(404)
})

app.get('/getContainerLogs', function (req, res) {
  res.sendStatus(404)
})

app.get('/getPodStatus', function (req, res) {
  res.sendStatus(404)
})

app.get('/getPods', function (req, res) {
  res.json(handlers.getPods())
})

app.get('/capacity', function (req, res) {
  res.json(handlers.getCapacity())
})

app.get('/nodeConditions', function (req, res) {
  res.json(handlers.getNodeConditions())
})

app.get('/nodeAddresses', function (req, res) {
  res.json(handlers.getNodeAddresses())
})

console.log(process.env.BALENA_API_KEY)
app.listen(3000, () => console.log('Running on http://localhost:3000'))
