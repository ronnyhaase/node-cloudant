"use strict";

var
	events = require('events')
	, util = require('util')

	, _ = require('lodash')
	, Q = require('q')
	;

function CloudantRequest(cb_success, cb_error, cb_complete) {
	if ( !(this instanceof CloudantRequest) ) return new CloudantRequest(cb_success, cb_error, cb_complete);

	events.EventEmitter.call(this);

	var
		self = this;

	this.success = function(callback) {
		self.on('success', callback);
		return self;
	};

	this.error = function(callback) {
		self.on('error', callback);
		return self;
	};

	this.complete = function(callback) {
		self.on('complete', callback);
		return self;
	};

	(function init() {
		if ( _.isFunction(cb_success) )
			self.on('success', cb_success);
		if ( _.isFunction(cb_error) )
			self.on('error', cb_error);
		if ( _.isFunction(cb_complete) )
			self.on('complete', cb_complete);
	})();
}

util.inherits(CloudantRequest, events.EventEmitter);

module.exports = CloudantRequest;
