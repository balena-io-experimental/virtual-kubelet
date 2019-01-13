const handlers = require('../lib/handlers');
const assert = require('assert');

describe('web-balena', function() {
	it('should give Balena Kubelet', () => {
		assert(handlers.defaultRoute() === 'Balena Kubelet');
	});

	it('should create a new Pod (in our context deploy to balena)', () => {
		assert(handlers.createPod() === true);
	});
});
