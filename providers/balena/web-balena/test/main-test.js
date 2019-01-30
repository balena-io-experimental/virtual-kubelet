const handlers = require('../lib/handlers');
const assert = require('assert');

describe('balena-kubelet', function() {
	it('should give Balena Kubelet', () => {
		assert(handlers.defaultRoute() === 'Balena Kubelet');
	});

	it('should get the running pods on the node', () => {
		assert.deepStrictEqual(handlers.getPods(), [{}]);
	});

	it('should create a new Pod (in our context deploy to balena)', () => {
		assert(handlers.createPod() === true);
	});
});

describe('Neccesary Virtual Kubelet functions', function() {
	it('should get node\'s capacity', () => {
		original = {"cpu": "3", "memory": "3Gi", "pods": "3"};
		returned = handlers.getCapacity();
		assert.deepStrictEqual(original, returned);
	});

	it('should get node\'s condtions', () => {
		original = [
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
		returned = handlers.getNodeConditions();
		assert.deepStrictEqual(original, returned);
	});

	it('should get node\'s addresses (fake one for now)', () => {
		original = [{
			"Type": "InternalIP",
			"Address": "1.2.3.4"
		}]
		returned = handlers.getNodeAddresses();
		assert.deepStrictEqual(original, returned);
	});
});
