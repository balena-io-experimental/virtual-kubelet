const express = require('express');
const app = express();
const handlers = require('./handlers');
const balenaSDK = require('balena-sdk');
const balena = balenaSDK();

app.get('/', (req, res) => {
  res.send(handlers.defaultRoute());
});

app.use('/createPod', express.json());
app.use('/updatePod', express.json());
app.use('/deletePod', express.json());

var pods = [];
app.post('/createPod', (req, res) => {
  console.log('-------CreatePod--------');
  console.log(JSON.stringify(req.body));
  pods.push(req.body);
  console.log('-------End CreatePod--------');
});

app.put('/updatePod', (req, res) => {
  console.log('-------UpdatePod--------');
  console.log(req.body);
  console.log('-------End UpdatePod--------');
  res.sendStatus(200);
});

app.delete('/deletePod', (req, res) => {
  console.log('-------DeletePod--------');
  console.log(req.body);
  console.log('-------End DeletePod--------');
  res.sendStatus(200);
});

app.get('/getPod', (req, res) => {
  console.log('-------GetPod--------');
  console.log(req.query);
  console.log('-------End GetPod--------');
  var wantedPod = pods.find(pod => pod.metadata.name === req.query.name);
  if (wantedPod) {
    res.json(wantedPod.status);
  } else {
    res.sendStatus(404);
  }
});

app.get('/getContainerLogs', (req, res) => {
  console.log('-------GetContainerLogs--------');
  console.log(req.query);
  console.log('-------End GetContainerLogs--------');
  res.sendStatus(404);
});

app.get('/getPodStatus', (req, res) => {
  console.log('-------GetPodStatus--------');
  console.log(req.query);
  console.log('-------End GetPodStatus--------');
  var wantedPod = pods.find(pod => pod.metadata.name === req.query.name);
  if (wantedPod) {
    wantedPod.status.phase = 'Running';
    res.json(wantedPod.status);
  } else {
    res.sendStatus(404);
  }
});

app.get('/getPods', (req, res) => {
  res.json(handlers.getPods());
});

app.get('/capacity', (req, res) => {
  res.json(handlers.getCapacity());
});

app.get('/nodeConditions', (req, res) => {
  res.json(handlers.getNodeConditions());
});

app.get('/nodeAddresses', (req, res) => {
  res.json(handlers.getNodeAddresses());
});

app.listen(3000, () => console.log('Balena Kubelet handler running on http://localhost:3000'));
