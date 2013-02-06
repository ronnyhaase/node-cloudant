function cloudant(username, password){
	if ( !(this instanceof cloudant) ) return new cloudant(username, password);

	var
		_un = username
		, _pw = password
	;

	this.allDbs = function() {
		// https://_UN_:_PW_@_UN_.cloudant.com/_all_dbs
	};

	/*var Settings = {
		limit
		skip

		key
		startkey
		endkey
	}*/

	this.dB = function(dbname) {
		if (typeof dbname !== 'string' || dbname.trim() === '' )
			return null;

		if ( !(this instanceof Db) ) return new Db(dbname);

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
	}
}

exports.cloudant = cloudant;
