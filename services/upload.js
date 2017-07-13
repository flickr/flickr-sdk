var Request = require('../lib/request').Request;

/**
 * @param {Function} auth
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} args
 * @constructor
 */

function Upload(auth, file, args) {
	Request.call(this, 'POST', 'https://up.flickr.com/services/upload');

	if (typeof auth !== 'function') {
		throw new Error('Missing auth superagent plugin');
	}

	if (typeof args === 'undefined') {
		args = {};
	}

	this.attach('photo', file);
	this.field(args);
	this.use(auth);
}

Upload.prototype = Object.create(Request.prototype);

/**
 * @module services/upload
 */

module.exports = Upload;
