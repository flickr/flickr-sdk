module.exports = {

	extends: 'flickr',

	env: {
		node: true
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
