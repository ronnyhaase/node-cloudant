"use strict";

var
	events = require('events')
	, util = require('util')
	;

function CloudantRequest(cb_complete, cb_success, cb_error) {
	events.EventEmitter.call(this);

	var
		self = this;

	this.success = function(callback) {
		self.on('success', callback);
		return self;
	}

	this.error = function(callback) {
		self.on('error', callback);
		return self;
	}

	this.complete = function(callback) {
		self.on('complete', callback);
		return self;
	}

	this.on('success', function() {});
	this.on('error', function() {});
	this.on('complete', function() {});
}

util.inherits(CloudantRequest, events.EventEmitter);

module.exports = CloudantRequest;
