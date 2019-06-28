/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

exports = module.exports = require('./services/rest');

// Services
exports.OAuth = require('./services/oauth');
exports.Feeds = require('./services/feeds');
exports.Upload = require('./services/upload');
exports.Replace = require('./services/replace');
