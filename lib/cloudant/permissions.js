"use strict";

function CloudantDbPermissions(dbname) {
	if ( !(this instanceof CloudantDbPermission) ) return new CloudantDbPermissions(dbname)

	this.setPermission = function(username, permissions) {
	};

	this.share = function(username, permissions) {
		// ...

		self.setPermissions(username, permissions);
	};

	this.genereteApiKey = function() {
		// POST https://__UN__:__PW_@cloudant.com/api/generate_api_key
	}

		var Permissions = {
			read: false
			, write: false
			, create: false
			, admin: false
		}

}
