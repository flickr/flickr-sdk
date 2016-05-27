// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var except = require('except');

/**
 * VALIDATE
 * @param {Object} params the params we're passing to the API
 * @param {Object} paramConfig Swagger API param definitions for us to match against
 * @returns {Object} nothing if no errors, details of error they exist
 */
module.exports = function (params, paramConfig) {

	var cleanParams = except(params, ['api_key']);
	var paramConfigObject = {};
	var errors = [];

	// Map array to keys for easy parsing
	paramConfig.forEach(function (param) {
		paramConfigObject[param.name] = param;
	});

	// Create a list of the required params
	var requiredParams = Object.keys(paramConfigObject).filter(function (key) {
		return paramConfigObject[key].required && key !== 'api_key';
	});

	// Loop through required params and make sure they exist
	requiredParams.forEach(function (requiredParam) {
		if (typeof cleanParams[requiredParam] === "undefined") {
			errors.push("Required param - " + requiredParam + " - not specified");
		}
	});

	// Loop through all the params in the config for this path
	Object.keys(paramConfigObject).forEach(function (paramKey) {

		// First check if it's even been passed in
		if (cleanParams[paramKey]) {

			// Check type
			/* istanbul ignore else */
			if (paramConfigObject[paramKey].type) {
				var paramValue = cleanParams[paramKey];

				// Identify the type
				var actualType = (typeof paramValue === "number") ? (Math.floor(paramValue) === paramValue ? "integer" : "number")  : typeof paramValue;

				// Handle the File type
				/* istanbul ignore next */
				actualType = (typeof File !== "undefined" && paramValue instanceof File) ? "file" : actualType;

				var expectedType = paramConfigObject[paramKey].type;

				// You can't specify multiple types in Swagger but for
				// file uploads done on the server you can pass in a
				// string path to the media rather than a File object
				actualType = (expectedType === "file" && actualType === "string") ? "file" : actualType;

				// Handle the case where integers are considered numbers too
				actualType = (expectedType === "number" && actualType === "integer" ? "number" : actualType);

				if (actualType !== expectedType) {
					errors.push("Param " + paramKey + " with type " + actualType + " not of the expected type: " + expectedType);
				}
			}

			// Check possible values
			if (paramConfigObject[paramKey].enum && paramConfigObject[paramKey].enum.indexOf(cleanParams[paramKey]) < 0) {
				errors.push("Param " + paramKey + " with value " + cleanParams[paramKey] + " not one of possible options: [" + paramConfigObject[paramKey].enum.join(", ") + "]");
			}

			// Check it matches the pattern if one is specified
			if (paramConfigObject[paramKey].type === "string" && paramConfigObject[paramKey].pattern) {
				if (typeof cleanParams[paramKey] === "string" && !cleanParams[paramKey].match(new RegExp(paramConfigObject[paramKey].pattern))) {
					errors.push("Param " + paramKey + " with value " + cleanParams[paramKey] + " doesn't match pattern " + paramConfigObject[paramKey].pattern);
				}
			}

		}

	});

	return errors;

};
