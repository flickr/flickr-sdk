// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/**
 * This method looks up the API definition in `schema` by the
 * arbitrary identifier `operationId`. Returns an object of the
 * holding `{ schema, path, verb }`, where `path` is the path key
 * of the operation and `verb` is the HTTP verb to use. Throws
 * if no operation exists in the schema by that ID.
 * @param {Object} schema The swagger schema to walk
 * @param {String} operationId The operation ID to find
 * @returns {Array}
 */
module.exports = function (schema, operationId) {

	var path;
	var verb;

	for (path in schema.paths) {
		/* istanbul ignore next */
		if (!schema.paths.hasOwnProperty(path)) {
			continue;
		}
		for (verb in schema.paths[path]) {
			/* istanbul ignore next */
			if (!schema.paths[path].hasOwnProperty(verb)) {
				continue;
			}
			if (schema.paths[path][verb].operationId === operationId) {
				return {
					schema: schema,
					path: path,
					verb: verb
				};
			}
		}
	}

	throw new Error('Unsupported operation: ' + operationId + ' (' + schema.info.version + ')');
};
