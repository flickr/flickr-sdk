/**
 * The following is borrowed from the the superagent-retry repo.
 * We don't need to use the entire repo, only the list of possible errors.
 * https://github.com/segmentio/superagent-retry
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Segmentio <friends@segment.io>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Connection reset detection
 */

function econnreset(err, res) {
	return err && err.code === 'ECONNRESET';
}


/**
 * Timeout detection
 */

function etimedout(err, res) {
	return err && err.code === 'ETIMEDOUT';
}


/**
 * Can't get address info
 */

function eaddrinfo(err, res) {
	return err && err.code === 'EADDRINFO';
}


/**
 * Socket timeout detection
 */

function esockettimedout(err, res) {
	return err && err.code === 'ESOCKETTIMEDOUT';
}


/**
 * Bad gateway error detection
 */

function gateway(err, res) {
	return res && [502,503,504].indexOf(res.status) !== -1;
}


/**
 * Superagent timeout errors
 */

function timeout(err, res) {
	return err && /^timeout of \d+ms exceeded$/.test(err.message);
}

module.exports = [
	econnreset,
	etimedout,
	eaddrinfo,
	esockettimedout,
	gateway,
	timeout
];
