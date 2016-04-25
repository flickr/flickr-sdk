/**
 * GET /services/rest?photo_id=21300619575&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=KbZrVDSXORJqs40WZ+aig19XJoE=&method=flickr.photos.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "589");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www337.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts123.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA41TS4+bMBD+K8hndmN2AyScqh566KGXVdVDU60GGIg3xka2SRSt8t87Y0j20UtPeF7+HoNfxbi3wYrqVahWVOIhe5SyyLZ5mYtUeGwcBkqXdfGYybbutjHrjugoWzxKCjtwg6iyVLQQcBq1hRb5qmy9zrYyLzbcpHwHR+tUQFHJVGjVoPHIgHwhdBjOzxqPqCnF/c4GCMqa2E1zvTKgb3Q2Xbldd7LctOKt2lk3AFdfxp7TJ8MkX4XxUdlakqZiK7/8kAwwkQoDA1N4UcNpr4YRzwyMoJf8dzUkv24FbZuFkXgCk3xzYBrlG5smPw3JapMnYoyetTbW3DzKN9Ekzs1GFakYIeyfQSvwH9EvqQgqaGTWzzQQ0LCerwhTUN2kk8E6o0yfBJvUmFiTQFKrA/Jgi75xapwZfhjn6lF5VSutwjlu2o9TTSuIW6PNOIWmjU7zmgalqUte5oV6HhitD//uNMAB2Y4HmeV3cnuXyUSWVSYrublWe3Jp0uAisLgNTeZgaD9LSoMP08hgEaGQxTrLcjnzxhObVOYlNWKrArzJaGgDdhiiShJCIbTtgAEopNlZ4//PsOLJQ49LX0sM+We+Ntba9tfz6BTfIGPg9+Bwxlzu9p9WkLEWYxc3+SCq33+YI9px3vce/DVgIgH62EvfpXVyOmboSxmqnEf2Kz7fkVmn7xH3IYy+2q12q9PpdN+REQd3T+x2qzjgd6u3/263evfqdytxYTh+k1HtQA7CFYh1+BBfmT2Iy1+R93zaPgQAAA==", "base64"));
  res.end();
};
