var package = require('../package');
var jsdoc = require('jsdoc-to-markdown');
var ejs = require('ejs');

jsdoc.render({
	files: [
		'index.js',
		'services/rest.js',
		'services/oauth.js',
		'services/upload.js',
		'services/feeds.js'
	],
	'no-cache': true
}).then(function (docs) {

	return new Promise(function (resolve, reject) {
		ejs.renderFile(__dirname + '/build-docs.ejs', {
			package: package,
			docs: docs
		}, function (err, str) {
			if (err) {
				reject(err);
			} else {
				resolve(str);
			}
		});
	});

}).then(function (str) {
	process.stdout.write(str);
}).catch(function (err) {
	console.error(err);
});
