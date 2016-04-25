/**
 * GET /services/rest?method=flickr.photos.getInfo&photo_id=21300619575&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=KbZrVDSXORJqs40WZ+aig19XJoE=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "589");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www288.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts108.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA41TO2/bMBD+KwJnp6ZiW7Y0FR06dOgSFB3qIjhJJ5kxRRIkZcMI/N97R8lO0i6dpHvxexz5KtzBRiuqV6FaUYnHfCVlkZeb7UYsRMDGY6T0ti5WuWzrrkxZf0JP2WIlKezAD6LKF6KFiKPTFlrko/L1Oi/lpthxkwodnKxXEUUlF0KrBk1ABuQDocN4edZ4Qk0p7vc2QlTWpG6a65UBfaez67blupPbXSveqp31A3D1xfWcPhsm+SpMSMrWkjQVpfz8XTLASCoMDEzhRQ3ngxocXhgYQc/5b2rIft4L2jYzI/EEJvvqwTQqNHaR/TAkq82eiDEG1tpYc/dos0smcW4yqlgIB/HwDFpB+Ih+XYiookZm/UwDEQ3r+YIwRtWNOhusN8r0WbRZjZk1GWS1OiIPthgar9zE8MM4V08qqFppFS9p08GNNa0gbY024xWaNjnNaxqUpi55nRYaeMDZEP/daYQjsh2PMt88yPIhl5ncVrms5O5W7cmlUYNPwOI+NJqjof3MKQ0hjo7BJoSyfMyLfDXxxjObVKz5nmCrIrzJaGgDdhiSShJCIbTtgBEopNlJ4//PsOIxQI9zX0sM+TLfGmtt+9u/84pPkCkIB/A4Yc5nh79WkLMWY2c3+UdUv34zR7Ru2vcBwi1gIhH61EvfuXX0OmXoSxmqXBz7lZ6vY9aL94iHGF2o9sv98nw+f+rIiKP/ROz2yzQQ9su3e7dfvnv1+6W4Mhy/yaR2IAfhBsQ6QkyvzB7F9Q+oVe2tPgQAAA==", "base64"));
  res.end();
};
