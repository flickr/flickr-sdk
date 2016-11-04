var subject = require('../validate');
var assert = require('assert');

describe('validate', function () {
	it('Should not throw an error if the keys exist in the object', function () {
		assert.doesNotThrow(function () {
			subject(
				{ a: 'a', b: 'b', flickr: 'feck'},
				['a', 'b', 'flickr']
			);
		});
	});

	it('Should not throw an error if just one key does exist in the object', function () {
		assert.doesNotThrow(function () {
			subject(
				{ a: 'a', b: 'b', flickr: 'feck'},
				['a', 'beyonce', 'flickRiver']
			);
		});
	});


	it('Should throw an error if the keys do not exist in the object', function () {
		assert.throws(function () {
			subject(
				{ a: 'a', b: 'b', flickr: 'feck'},
				['d', 'e', 'flickRiver']
			);
		});
	});

	it('Should do nothing if you do not pass it keys', function () {
		assert.doesNotThrow(function () {
			subject(
				{ a: 'a', b: 'b', flickr: 'feck'}
			);
		});
	});
});
