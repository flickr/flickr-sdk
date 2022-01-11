/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

module.exports = {

	extends: 'flickr',

	env: {
		node: true,
		es6: true
	},

	plugins: [
		'header'
	],

	rules: {
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'header/header': ['error', 'script/header.js']
	}

};
