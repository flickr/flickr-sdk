var ejs = require('ejs');

/**
 * Render the client file
 */

ejs.renderFile(__dirname + '/build-types.ejs', {

	/**
	 * All available method info responses
	 * @type {Object}
	 */

	methods: require('require-dir')('../src'),

	get methodTree() {
		return Object.keys(this.methods)
			.reduce((result, i) => {
				let parent = result;
				const keys = i.split('.').slice(1);
				const method = keys.pop();

				for (let key of keys) {
					parent = parent[key] = parent[key] || {};
				}
				parent[method] = i;
				return result;
			}, {});
	},

	/**
	 * Returns all of the arguments for `method`.
	 * @param {String} method
	 * @returns {String[]}
	 */

	getArguments: function (method) {
		return this.methods[method]
			.arguments
			.argument;
	},

	/**
	 * Returns the level of perms required for this method.
	 * @param {String} method
	 * @returns {String}
	 */

	getPerms: function (method) {
		switch (parseInt(this.methods[method].method.requiredperms, 10)) {
		case 1:
			return 'read';
		case 2:
			return 'write';
		case 3:
			return 'delete';
		default:
			return 'none';
		}
	},

	/**
	 * Returns the Flickr API documentation url for `method`.
	 * @param {String} method
	 * @returns {String}
	 */

	getDocsURL: function (method) {
		return 'https://www.flickr.com/services/api/' + method + '.html';
	}

}, function (err, str) {
	if (err) {
		throw err;
	}
	process.stdout.write(str);
});
