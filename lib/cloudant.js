"use strict";

var
	// Node internal libs
	events = require('events')
	, util = require('util')

	// External libs
	, $ = require('request')
	, _ = require('lodash')

	// Own libs
	, CloudantRequest = require('./cloudant/request')
	, CloudantDb = require('./cloudant/db');

function cloudant(username, password, host) {
	if ( !(this instanceof cloudant) ) return new cloudant(username, password, host);

	events.EventEmitter.call(this);

	if ( host === undefined )
		host = username;

	var
		request_defaults = {
			uri: 'https://' + username + ':' + password + '@' + host + '.cloudant.com/'
			, strictSSL: true
		}
	;

	this.allDbs = function(cb_success, cb_failure) {
		// https://_UN_:_PW_@_UN_.cloudant.com/_all_dbs
		var
			reqopts = _.clone(request_defaults)
			, req = new CloudantRequest()
			;

		reqopts.uri = reqopts.uri + '_all_dbs';

		$.get(reqopts, function(error, response, body) {
			if ( !error && response.statusCode == 200 ) {
				req.emit('success');
				req.emit('complete');
			} else {
				req.emit('error');
			}
		});

		return req;
	};

	this.dB = function(dbname) {
		return new CloudantDb(dbname, self)
	}
}

util.inherits(cloudant, events.EventEmitter);

exports.cloudant = cloudant;

