var
	events = require('events')
	, util = require('util')
	;

function CloudantRequest(cb_complete, cb_success, cb_error) {
	events.EventEmitter.call(this);

	this.success = function(callback) {
	}

	this.error = function(callback) {
	}

	this.complete = function(callback) {
	}
}

util.inherits(CloudantRequest, events.EventEmitter);

