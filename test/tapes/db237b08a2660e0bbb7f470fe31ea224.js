/**
 * GET /v2/tags/trending/2014/12/05?resolution=&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=A/lgC+mPOVzQq9SadVqA9u8ze/U=
 *
 * host: api.flickr.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 422;

  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH");
  res.setHeader("access-control-expose-headers", "X-Total-Count, Link");
  res.setHeader("x-application-context", "application:prod-bf1");
  res.setHeader("set-cookie", ["BX=6i007r1ba4ucg&b=3&s=b2;Path=/;Domain=.flickr.com;Expires=Sun, 21-Jan-2018 18:48:48 GMT"]);
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 GMT");
  res.setHeader("content-type", "application/json; charset=UTF-8");
  res.setHeader("date", "Fri, 22 Jan 2016 18:48:48 GMT");
  res.setHeader("age", "2");
  res.setHeader("server", "ATS");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 r10.ycpi.sjb.yahoo.net (ApacheTrafficServer [cMsSfW])");
  res.setHeader("y-trace", "BAEAQAAAAABkf7M_88DP8QAAAAAAAAAA35tUsQG4rlYAAAAAAAAAAAAFKfCrcm2fAAUp8Kt04El9gLGMAAAAAA--");

  res.write(new Buffer("eyJpZCI6IjY3ZWM1NDIyLTdhMzMtNDQ1NC1iMDZjLThkYmU5YjM5ZjM0YyIsImNvZGUiOiJJTlZBTElEX0FSR1VNRU5UUyIsIm1zZyI6IlByb3ZpZGVkIGVuZHBvaW50IHdhcyBpbnZhbGlkLiBQbGVhc2UgY29uc3VsdCBkb2N1bWVudGF0aW9uIGF0IGh0dHA6Ly9mbGlja3IuY29tIGZvciBzeW50YXggcmVmZXJlbmNlIn0=", "base64"));
  res.end();
};
