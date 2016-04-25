// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var join = require('path').join;

/**
 * Takes the API definition + the params passed in at run time
 * to generate a URL with subbed in params
 * @param {Object} defintion The swagger definition for this operation
 * @param {Object} params All the params passed in by the user
 * @param {Object} transportConfig Flickr transport config with potential host and basePath overrides
 * @returns {String} the full path
 */
module.exports = function (definition, params, transportConfig) {

	var schema = definition.schema;
	var path   = definition.path;
	var verb   = definition.verb;
	var config = schema.paths[path][verb];
	var http   = "https";

	// Allow overridng a host and basePath
	var host = (transportConfig && transportConfig.host) ? transportConfig.host : schema.host;
	var basePath = (transportConfig && transportConfig.basePath) ? transportConfig.basePath : schema.basePath || "";

	// If there's a scheme defined, use it
	if (schema.schemes && schema.schemes[0]) {
		http = schema.schemes[0];
	}

	// If there's an override scheme, use that
	if (transportConfig && transportConfig.scheme) {
		http = transportConfig.scheme;
	}

	// Loop through params that are in the URL
	if (config && config.parameters) {
		config.parameters.forEach(function (paramConfig) {
			// If this param should be in the path and its value has been passed in
			if (paramConfig.in === 'path' && typeof params[paramConfig.name] !== 'undefined') {
				// Replace the place holder with the value
				path = path.replace("{" + paramConfig.name + "}", params[paramConfig.name]);
			}
		});
	}

	// Remove any path params that haven't been substituted
	path = path.replace(/\/{[a-zA-Z_]+}/, "");

	return http + "://" + host + join(basePath, path);

};
