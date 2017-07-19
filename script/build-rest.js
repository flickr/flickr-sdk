var ejs = require('ejs');

/**
 * Returns the method namespace of `method`, which is
 * the method name minus the root and the basename.
 * @param {String} method
 * @returns {String}
 */

function namespace(method) {
	return method.split('.').slice(1, -1).join('.');
}

/**
 * Adds all of the "parts" of `ns` to `memo` and returns it.
 * Some namespaces have intermediate parts that have no methods
 * on their own. This is problematic when trying to create all
 * of our namespaces in javascript as the intermediate objects
 * will be undefined and assigning to them will throw. This
 * method helps us ensure that all intermediate namespaces
 * will be created.
 * @param {String[]} memo
 * @param {String} ns
 * @returns {String[]}
 */

function parts(memo, ns) {
	return memo.concat(ns.split('.').map(function (_, i, arr) {
		return arr.slice(0, i + 1).join('.');
	}));
}

/**
 * Reduce function that only adds `str` to `memo` if it
 * does not already exist in the array.
 * @param {String[]} memo
 * @param {String} str
 * @returns {String[]}
 */

function uniq(memo, str) {
	if (memo.indexOf(str) === -1) {
		memo.push(str);
	}
	return memo;
}

/**
 * Returns a filter function that returns whether or not
 * `method` is under the namespace `ns`.
 * @param {String}
 * @returns {Function}
 */

function inNamespace(ns) {
	return function (method) {
		return namespace(method) === ns;
	};
}

/**
 * Returns whether or not `arg` is a required argument.
 * @param {Object} arg
 * @returns {Boolean}
 */

function required(arg) {
	return !parseInt(arg.optional, 10) && arg.name !== 'api_key';
}

/**
 * Render the client file
 */

ejs.renderFile(__dirname + '/build-rest.ejs', {

	/**
	 * All available method info responses
	 * @type {Object}
	 */

	methods: require('require-dir')('../src'),

	/**
	 * All of the possible namespaces
	 * @type {String[]}
	 */

	get namespaces() {
		return Object.keys(this.methods)
			.map(namespace)
			.reduce(parts, [])
			.reduce(uniq, [])
			.sort();
	},

	/**
	 * Returns all of the method names that exist
	 * under the namespace `ns`.
	 * @param {String} ns
	 * @returns {String[]}
	 */

	getMethodsByNamespace: function (ns) {
		return Object.keys(this.methods).filter(inNamespace(ns));
	},

	/**
	 * Returns all of the non-optional arguments for `method`.
	 * @param {String} method
	 * @returns {String[]}
	 */

	getRequiredArguments: function (method) {
		return this.methods[method]
			.arguments
			.argument
			.filter(required)
			.map(function (arg) {
				return arg.name;
			});
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
	 * Returns the HTTP verb for this method info. If the method
	 * needs either "write" or "delete" perms, the verb is POST.
	 * Otherwise, the verb is GET.
	 * @param {String} method
	 * @returns {String}
	 */

	getHTTPVerb: function (method) {
		switch (this.getPerms(method)) {
		case 'write':
		case 'delete':
			return 'POST';
		default:
			return 'GET';
		}
	},

	/**
	 * Returns the method basename of `method`, which is
	 * everything after the last delimiter.
	 * @param {String} method
	 * @returns {String}
	 */

	basename: function (method) {
		return method.split('.').pop();
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
