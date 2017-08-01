var pink = require('chalk').magenta;
var blue = require('chalk').cyan;

/**
 * A ora-compatible Flickr ball spinner.
 * @type {Object}
 * @see https://github.com/sindresorhus/ora
 */

module.exports = {

	// so ora doesn't try to color our spinner for us
	color: false,

	// the flickr ball spinner animation
	spinner: {
		interval: 150,
		frames: [
			blue('∙') + ' ' + pink('●'),
			blue('●') + ' ' + pink('∙'),
			' ' + blue('✺') + ' ',
			pink('∙') + ' ' + blue('●'),
			pink('●') + ' ' + blue('∙'),
			' ' + pink('✺') + ' '
		]
	}
};
