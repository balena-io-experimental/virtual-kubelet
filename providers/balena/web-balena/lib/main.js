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
  res.sendStatus(404)
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
  nothing = {}
  res.json(nothing)
})

// Should be implemented in order not to panic
app.get('/capacity', function (req, res) {
  mockCapacity = {
    "cpu": "3",
    "memory": "3Gi", 
    "pods": "3"
  }
  res.json(mockCapacity)
})

// Should be implemented in order not to panic
app.get('/nodeConditions', function (req, res) {
  conditions = [
    {
      "Type": "Ready",
      "Status": "True",
      "LastHeartbeatTime": new Date(),
      "LastTransitionTime": new Date(),
      "Reason": "KubeletReady",
      "Message": "Kubelet is ready."
    },
    {
      "Type": "NotReady",
      "Status": "False",
      "LastHeartbeatTime": new Date(),
      "LastTransitionTime": new Date(),
      "Reason": "KubeletNotReady",
      "Message": "Kubelet is not ready."
    }
  ]
  res.json(conditions)
})

// Should be implemented in order not to panic
app.get('/nodeAddresses', function (req, res) {
  nodeAddress = {
    "Type": "InternalIP",
    "Address": "1.2.3.4"
  }
  res.json(nodeAddress)
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))
