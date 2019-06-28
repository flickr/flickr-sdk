/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var Request = require('../lib/request').Request;
var xml = require('../plugins/xml');

/**
 * Creates a new Replace service instance. Since the Replace API only
 * does one thing (replace files), an Replace instance is simply
 * a Request subclass.
 *
 * The Replace endpoint requires authentication. You should pass a configured
 * instance of the [OAuth plugin]{@link Flickr.OAuth.createPlugin} to replace
 * photos on behalf of another user.
 *
 * @param {Function} auth
 * @param {Number|String} photoID The ID of the photo to replace
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} [args]
 * @constructor
 * @extends Request
 * @memberof Flickr
 *
 * @example
 *
 * var replace = new Flickr.Replace(auth, 41234567890, 'replace.png', {
 *   title: 'Now in pink!'
 * });
 *
 * replace.then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @see https://www.flickr.com/services/api/replace.api.html
 */

function Replace(auth, photoID, file, args) {

	// allow creating a client without `new`
	if (!(this instanceof Replace)) {
		return new Replace(auth, photoID, file, args);
	}

	Request.call(this, 'POST', 'https://up.flickr.com/services/replace');

	if (typeof auth !== 'function') {
		throw new Error('Missing required argument "auth"');
	}

	if (typeof photoID === 'undefined') {
		throw new Error('Missing required argument "photoID"');
	}

	if (typeof args === 'undefined') {
		args = {};
	}

	this.attach('photo', file);
	this.field('photo_id', photoID);
	this.field(args);
	this.use(xml);
	this.use(auth);
}

Replace.prototype = Object.create(Request.prototype);

module.exports = Replace;
