"use strict";

var
	events = require('events')
	, util = require('util');

function CloudantDb(dbname, __owner) {
	events.EventEmitter.call(this);

	if ( !(_.isString(dbname)) || dbname.trim() === '' )
		return null;

	if ( !(this instanceof Db) ) return new CloudantDb(dbname);

	var
		parent = __owner
		, self = this

		, dbname = dbname;
	
	//
	// Interface
	//
	this.name = function() {
		return dbname;
	}

	//
	// Database methods
	//
	this.changes = function() {
		// GET https://__HOST__.cloudant.com/__DB__/_changes
	};

	this.info = function(params) {
		// GET https://__HOST__.cloudant.com/__DB__
	};

	// Creates the DB if it doesn't exist
	this.create = function() {
		// PUT https://__HOST__.cloudant.com/__DB__
	};

	// Deletes the DB
	this.destroy = function() {
		// DELETE https://__HOST__.cloudant.com/__DB__
	};

	//
	// Document methods
	//

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

};

util.inherits(CloudantDb, events.EventEmitter);

module.exports = CloudantDb;

