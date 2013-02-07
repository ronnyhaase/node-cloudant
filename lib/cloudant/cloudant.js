var
	https = require('https')
	, _ = require('lodash')
	;

function cloudant(username, password, host){
	if ( !(this instanceof cloudant) ) return new cloudant(username, password, host);

	if ( host === undefined )
		host = username;

	var
		request_options = {
			hostname: host + '.cloudant.com'
			, port: 443
			, path: '/'
			, auth: username + ':' + password
			, agent: undefined
		}
	;

	function _request(options, cb_success, cb_failure) {
		var
			request
			, response = ''
			;

		request = https.request(options, function(resp) {
			resp.setEncoding('utf8');

			if ( resp.statusCode !== 200 && _.isFunction(cb_failure) ) {
				cb_failure({}, resp);
				return;
			}

			resp.on('data', function(chunk) {
				response += chunk;
			});

			resp.on('error', function(err) {
				if ( _.isFunction(cb_failure) )
					cb_failure(err, resp);
			});

			resp.on('end', function() {
				response = JSON.parse(response);

				// Ckeck for internal error
				if ( response.error && _.isFunction(cb_failure) ) {
					cb_failure({}, response);
					return;
				}

				if ( _.isFunction(cb_success) )
					cb_success(response);
			});
		});

		request.on('error', function(err) {
			if ( _.isFunction(cb_failure) )
				cb_failure(err);
		});

		request.end();
	}

	this.allDbs = function(cb_success, cb_failure) {
		// https://_UN_:_PW_@_UN_.cloudant.com/_all_dbs
		var
			reqopts = _.clone(request_options, true)
			;

		reqopts.path = '/_all_dbs'

		_request(reqopts, cb_failure);
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
		this.delete = function(_id, _rev) {
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

exports.cloudant = cloudant;
