// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint ignore:start */
/* jscs:disable */

//
// ===========================================================================
// vars
// ===========================================================================
//

var merge = require('deepmerge');


//
// ===========================================================================
// Private functions
// ===========================================================================
//

var reduce = function (arr, fn, initial) {
	var idx = 0,
	    len = arr.length,
	    curr = arguments.length == 3 ? initial : arr[idx++];

	while (idx < len) {
		curr = fn.call(null, curr, arr[idx], ++idx, arr);
	}

	return curr;
};

var root = typeof window === 'undefined' ? this : window;

var serializeObject = function (obj) {
	if (obj !== Object(obj)) {
		return obj;
	}
	var pairs = [];
	for (var key in obj) {
		if (obj[key] !== null) {
			var pair = encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
			pairs.push(pair);
		}
	}
	return pairs.join('&');
};

var parseString = function (str) {
	var obj = {},
	    pairs = str.split('&'),
	    parts,
	    pair,
	    i,
	    len;

	for (i = 0, len = pairs.length; i < len; ++i) {
		pair = pairs[i];
		parts = pair.split('=');
		obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	}

	return obj;
};

var isHost = function (obj) {
	var str = {}.toString.call(obj);

	switch (str) {
		case '[object File]':
		case '[object Blob]':
		case '[object FormData]':
			return true;
		default:
			return false;
	}
};

var parseHeader = function (str) {
	var lines = str.split(/\r?\n/),
	    fields = {},
	    index,
	    line,
	    field,
	    val,
	    len,
	    i = 0;

	lines.pop();

	for (i = 0, len = lines.length; i < len; ++i) {
		line = lines[i];
		index = line.indexOf(':');
		field = line.slice(0, index).toLowerCase();
		val = trim(line.slice(index + 1));
		fields[field] = val;
	}

	return fields;
};

var params = function (str) {
	return reduce(str.split(/ *; */), function (obj, str) {
		var parts = str.split(/ *= */),
		    key = parts.shift(),
		    val = parts.shift();

		if (key && val) {
			obj[key] = val;
		}

		return obj;
	}, {});
};

var trim = ''.trim ? function(s) { return s.trim(); } : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

var noop = function () {};


//
// ===========================================================================
// RESPONSE
// ===========================================================================
//

function Response(req, opts) {
	opts = opts || {};
	this.req = req;
	this.xhr = this.req.xhr;
	this.text = ((this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined') ? this.xhr.responseText : null;
	this.statusText = this.xhr.statusText;
	this.setStatusProperties(this.xhr.status);
	this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	this.setHeaderProperties(this.header);
	this.body = this.parseBody(this.text ? this.text : this.xhr.response);
}

Response.prototype.setStatusProperties = function (status) {
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  this.status = status;
  this.statusType = type;

  this.info = 1 === type;
  this.ok = 2 === type;
  this.clientError = 4 === type;
  this.serverError = 5 === type;
  this.error = (4 === type || 5 === type) ? this.toError() : false;

  this.accepted = 202 === status;
  this.noContent = 204 === status;
  this.badRequest = 400 === status;
  this.unauthorized = 401 === status;
  this.notAcceptable = 406 === status;
  this.notFound = 404 === status;
  this.forbidden = 403 === status;
};

Response.prototype.setHeaderProperties = function (header) {
	var contentType = this.header['content-type'] || '',
	    obj = params(contentType);

	this.type = contentType.split(/ *; */).shift();

	for (var key in obj) {
		this[key] = obj[key];
	}
};

Response.prototype.parseBody = function (body) {
	var parse = request.parse[this.type];
	return parse && body && (body.length || typeof body === 'object') ? parse(body) : null;
};

Response.prototype.get = function (field) {
	return this.header[field.toLowerCase()];
};

Response.prototype.toError = function () {
	var request = this.request,
	    error;

	error = new Error('Cannot ' + request.method + ' ' + request.url + ' (' + this.status + ')');
	error.status = this.status;
	error.method = request.method;
	error.url = request.url;
	return error;
};


//
// ===========================================================================
// REQUEST
// ===========================================================================
//

function Request(method, url) {
	this.xhr = request.getXHR();
	this.method = method;
	this.url = url;
	this._query = [];
	this.header = this._header = {};
	this.listeners = {};
}

Request.prototype.on = function (type, fn) {
	if (typeof type === 'string' && typeof fn === 'function') {
		this.listeners[type.toLowerCase()] = fn;
	}
	return this;
};

Request.prototype.attach = function (field, file) {
	if (!this.formData) {
		this.formData = new root.FormData();
	}
	this.formData.append(field, file);
	return this;
};

Request.prototype.query = function (val) {
	if (typeof val !== 'string') {
		val = serializeObject(val);
	}
	if (val) {
		this._query.push(val);
	}
	return this;
};

Request.prototype.set = function (field, val) {
  if (field === Object(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

Request.prototype.getHeader = function (field) {
	return this._header[field.toLowerCase()];
};

Request.prototype.use = function (fn) {
  fn(this);
  return this;
};

Request.prototype.timeout = function (ms) {
	this.timeout = ms;
	return this;
};

Request.prototype.clearTimeout = function () {
	this.timeout = 0;
	clearTimeout(this.timer);
	return this;
};

Request.prototype.timeoutError = function () {
	var timeout = this.timeout,
	    error = new Error('Timeout of ' + timeout + 'ms exceeded');

	error.timeout = timeout;
	this.callback(error);
};

Request.prototype.abort = function () {
	if (this.aborted) {
		return;
	}
	this.aborted = true;
	this.xhr.abort();
	this.clearTimeout();
	return this;
};

Request.prototype.crossDomainError = function () {
	var error = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	error.crossdomain = true;
	this.callback(error);
};

Request.prototype.callback = function (error, response) {
	var fn = this._callback;
	this.clearTimeout();
	fn(error, response);
};

Request.prototype.end = function (fn) {
	// use the actual xhr call here

	var self = this,
	    xhr = this.xhr,
	    query = this._query.join('&'),
	    timeout = this.timeout,
	    data = this.formData || this.data;

	this._callback = fn || noop;

	xhr.onreadystatechange = function () {
		var status = xhr.status || 0,
		    error = null,
		    otherError = null,
		    response = null;

		if (xhr.readyState !== 4) {
			// not done yet and we don't really care
			return;
		} else {
			if (status === 0) {
				if (self.timedOut) {
					return self.timeoutError();
				} else if (self.aborted) {
					return;
				} else {
					return self.crossDomainError();
				}
			} else {
				try {
					response = new Response(self);
				} catch (e) {
					error = new Error('Unable to parse the response');
					error.parse = true;
					error.originalError = e;
					return self.callback(error);
				}

				if (response.status >= 200 && response.status < 300) {
					return self.callback(error, response);
				} else {
					otherError = new Error(response.statusText || 'Unsuccessful HTTP response');
					otherError.originalError = error;
					otherError.response = response;
					otherError.stats = response.status;

					return self.callback(otherError, response);
				}
			}
		}
	};

	xhr.onprogress = function (event) {
		if (event.total > 0) {
			event.percent = event.loaded / event.total * 100;
		}

		if (self.listeners['progress']) {
			self.listeners['progress'].call(self, event);
		}
	};

	if (timeout && !this.timer) {
		this.timer = setTimeout(function () {
			self.timedOut = true;
			self.abort();
		}, timeout);
	}

	if (query) {
		query = request.serializeObject(query);
		this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
	}

	if (typeof data !== 'string' && !isHost(data)) {
		var contentType = this.getHeader('Content-Type'),
		    serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];

		if (serialize) {
			data = serialize(data);
		}
	}

	xhr.open(this.method, this.url, true);

	// need to set other headers here
	for (var field in this.headers) {
		if (this.headers[field] === null || this.headers[field] === undefined) {
			continue;
		}
		xhr.setRequestHeader(field, this.headers[field]);
	}

	xhr.send(data);

	return this;
};


//
// ===========================================================================
// request
// ===========================================================================
//

function request(method, url) {
	return new Request(method, url);
}

request.post = function (url, data, fn) {
	var req = request('POST', url);
	if (typeof data === 'function') {
		fn = data;
		data = null;
	}

	if (data) {
		req.send(data);
	}

	if (fn) {
		req.end(fn);
	}

	return req;
};

request.getXHR = function () {
	if ((root.XMLHttpRequest) && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
		return new XMLHttpRequest;
	} else {
		try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
		try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
		try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
		try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	}
	return false;
};

request.serializeObject = serializeObject;

request.parseString = parseString;

request.serialize = {
	'application/x-www-form-urlencoded': serializeObject,
	'application/json': JSON.stringify
};

request.parse = {
	'application/x-www-form-urlencoded': parseString,
	'application/json': JSON.parse
};


//
// ===========================================================================
// GO GO GO
// ===========================================================================
//

module.exports = request;
