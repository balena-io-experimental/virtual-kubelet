function defaultRoute() {
  return 'Balena Kubelet'
}

function createPod() {
  //TODO
  return true
}

function getPods() {
  return [{}]
}

function getCapacity() {
  return {
    "cpu": "3",
    "memory": "3Gi", 
    "pods": "3"
  }
}

function getNodeConditions() {
  return [
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
}

function getNodeAddresses() {
  return [{
    "Type": "InternalIP",
    "Address": "1.2.3.4"
  }]
}

async function validateBalenaAPIkey(sdk, apiKey) {
  sdk.auth.loginWithToken(apiKey);
  return await sdk.auth.isLoggedIn();
}

module.exports = {
  defaultRoute, createPod, getCapacity, getNodeConditions, getNodeAddresses, getPods, validateBalenaAPIkey
}
