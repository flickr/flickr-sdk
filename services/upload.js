/*!
 * Copyright 2017 Yahoo Holdings.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var Request = require('../lib/request').Request;

/**
 * Creates a new Upload service instance. Since the Upload API only
 * does one thing (upload files), an Upload instance is simply
 * a Request subclass.
 *
 * You **must** pass an authentication plugin as the first parameter.
 * If you're using OAuth, we have a [convenience method][#TODO]
 * to create a plugin function.
 *
 * @param {Function} auth
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} [args]
 * @constructor
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

module.exports = Upload;
