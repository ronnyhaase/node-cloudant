"use strict";

var
	events = require('events')
	, util = require('util');

function CloudantDb(dbname, __owner) {
	events.EventEmitter.call(this);

	if ( !(_.isString(dbname)) || dbname.trim() === '' )
		return null;

	if ( !(this instanceof Db) ) return new Db(dbname);

	var
		parent = __owner
		, self = this;

	//
	// General purpose
	//
	this.changes = function() {
		// https://__HOST__.cloudant.com/__DB__/_changes
	};

	this.info = function(params) {
		// https://__HOST__.cloudant.com/__DB__
	};

	//
	// CRUD / Manipulation
	//

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

	/*var Settings = {
		limit
		skip

		key
		startkey
		endkey
	}*/
	this.query = function() {
		// https://_UN_:_PW_@_UN_.cloudant.com/_DBNAME_/_all_docs
	};
	
	// Queries a view of the DB
	this.view = function(viewname) {
		// https://_US_:_PW_@_UN_.cloudant.com/_DBNAME_/_design
	};

	//
	// Cloudant specific
	//
	this.setPermission = function(username, permissions) {
	};

	this.share = function(username, permissions) {
		// ...

		self.setPermissions(username, permissions);
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
};

util.inherits(CloudantDb, events.EventEmitter);

module.exports = CloudantDb;

