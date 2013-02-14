"use strict";

var
	// Node internal libs
	events = require('events')
	, util = require('util')

	// External libs
	, $ = require('request')
	, _ = require('lodash')

	// Own libs
	, CloudantRequest = require('./cloudant/request.js')
	;

function cloudant(username, password, host) {
	if ( !(this instanceof cloudant) ) return new cloudant(username, password, host);

	events.EventEmitter.call(this);

	if ( host === undefined )
		host = username;

	var
		request_options_default = {
			uri: 'https://' + host + '.cloudant.com'
			, auth: {
				user: username
				, pass: password
				, sendImmediately: true
			}
			, strictSSL: true
		}
	;

	this.allDbs = function(cb_success, cb_failure) {
		// https://_UN_:_PW_@_UN_.cloudant.com/_all_dbs
		//$.get();
	};

	/*var Settings = {
		limit
		skip

		key
		startkey
		endkey
	}*/

	this.dB = function(dbname) {
		if ( !(_.isString(dbname)) || dbname.trim() === '' )
			return null;

		if ( !(this instanceof Db) ) return new Db(dbname);

		var
			self = this;

		// Creates the DB if it doesn't exist
		this.create = function() {
		};

		// Deletes the DB
		this.destroy = function() {
		};

		// Inserts / appends a new document to the DB
		this.insert = function(jsondata) {
		};

		// Deletes a document of the DB
		this.del = function(_id, _rev) {
		};

		// Updates a document of the DB
		this.update = function(_id, _rev, jsondata) {
		};

		this.query = function() {
			// https://_UN_:_PW_@_UN_.cloudant.com/_DBNAME_/_all_docs
		};
	
		// Queries a view of the DB
		this.view = function(viewname) {
			// https://_US_:_PW_@_UN_.cloudant.com/_DBNAME_/_design
		};

		this.setPermission = function(username, permissions) {
		}

		this.share = function(username, permissions) {
			// ...

			self.setPermissions(username, permissions);
		}
	};

	this.Permissions = function() {
		this.genereteApiKey = function() {
			// curl https://bluepen:password@cloudant.com/api/generate_api_key -X POST
		}

		var Permissions = {
			read: false
			, write: false
			, create: false
			, admin: false
		}

		this.setPermissions = function(db, username, permissions ) {
		}
	};
}

util.inherits(cloudant, events.EventEmitter);

exports.cloudant = cloudant;
