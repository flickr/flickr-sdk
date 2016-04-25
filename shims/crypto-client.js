var JsSHA = require('../vendor/jssha.js');

module.exports = {
	createHash: function (type) {
		if (type === 'sha1') {
			var ret = new JsSHA('SHA-1', 'TEXT'),
			    oldUpdate = ret.update;

			ret.digest = function (type) {
				if (type === 'hex') {
					return ret.getHash('HEX');
				}
			};

			ret.update = function (str) {
				oldUpdate.call(ret, str);

				return this;
			};

			return ret;
		}
	},

	createHmac: function (type, key) {
		if (type === 'sha1') {
			var ret = new JsSHA('SHA-1', 'TEXT'),
			    oldUpdate = ret.update;

			ret.digest = function (type) {
				if (type === 'base64') {
					return ret.getHMAC('B64');
				}
			};

			ret.update = function (str) {
				oldUpdate.call(ret, str);

				return this;
			};

			ret.setHMACKey(key, 'TEXT');

			return ret;
		}
	}
};
