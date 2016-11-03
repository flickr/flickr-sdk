/**
 * Asserts that any of the N keys passed in
 * are found in the obj
 * @param {Object} obj
 * @param {String} key
 * @throws {Error}
 */

module.exports = function () {
	var keys = Array.prototype.slice.call(arguments),
		obj,
		missing = [],
		found = false;

	if (keys.length > 1) {
		obj = keys.splice(0, 1)[0] || {};

		keys.some(function (key) {
			found = obj.hasOwnProperty(key);
			if (!found) {
				missing.push(key);
			}
			return found;
		});

		if (!found && missing.length > 0) {
			throw new Error('Missing required argument' + (missing.length > 1 ? 's' : '') + ' "' + missing.join('", "') + '"');
		}
	}
};
