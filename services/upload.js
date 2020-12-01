/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var Request = require('../lib/request').Request;
var xml = require('../plugins/xml');

/**
 * Creates a new Upload service instance. Since the Upload API only
 * does one thing (upload files), an Upload instance is simply
 * a Request subclass.
 *
 * The Upload endpoint requires authentication. You should pass a configured
 * instance of the [OAuth plugin]{@link Flickr.OAuth.createPlugin} to upload
 * photos on behalf of another user.
 *
 * @param {Function} auth
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} [args]
 * @constructor
 * @extends Request
 * @memberof Flickr
 *
 * @example
 *
 * var upload = new Flickr.Upload(auth, 'upload.png', {
 *   title: 'Works on MY machine!'
 * });
 *
 * upload.then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @see https://www.flickr.com/services/api/upload.api.html
 */

function Upload(auth, file, args) {

	// allow creating a client without `new`
	if (!(this instanceof Upload)) {
		return new Upload(auth, file, args);
	}

	Request.call(this, 'POST', 'https://up.flickr.com/services/upload');

	if (typeof auth !== 'function') {
		throw new Error('Missing required argument "auth"');
	}

	if (typeof args === 'undefined') {
		args = {};
	}

	// superagent and form-data try to assume the filename from the file value
	// given, but expect it to be passed explicitly if given a Buffer, so we'll
	// just make one up. Leave it falsy so that that we don't change
	// superagent's default behavior
	let filename = Buffer.isBuffer(file) ? 'flickr-sdk.jpg' : undefined;

	this.attach('photo', file, filename);
	this.field(args);
	this.use(xml);
	this.use(auth);
}

Upload.prototype = Object.create(Request.prototype);

module.exports = Upload;
