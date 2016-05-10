var path = require("path");

/**
 * GET /services/rest?user_id=36521981547@N01&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=RiL70uzWOVafhWPbbVIhUqAvPEU=&method=flickr.people.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 10 May 2016 20:27:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "517");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www271.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts121.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA5WTbWvbMBDHv0oQtH2TxJKfkpg4XdnYm7FSGLQwDEaRZVuLbQlJaZaW7LPvZC9rGjq2gbDvTr/763SHnpHi2sgOJc9IFChBQRz5ZDEnUTh7d4sJGqPO/GFDGKUlSsgYMdrl6+0+P/qCyc5w/cg1JJJoFqIhVlLdosQfI0VtndNGUANAITfwH6OamtxYal3M6fPvSmjunEUQRGEUYwzRindFr/vZiVad1BzKw1CE7CxltrdLLQAbTNqKZt+bmj+eQuCecM57QX8JrwdvC5fpaMtdl3InwTuQQKoWzWio/uAEaPMGdOegD0eo4IZpoawYWn7CLemo1rxMM1Rbq0ySeZm32+2mZSPYRk+ZbDNP1dJKk3n9mZkXBXgOM/EBRaulaKsRa6gx6VUnrZE7UfCrkdHslSRn0z2Qgx5n11vdpP3uRXBz4X+E5UYg2Mm5EAsC+ByPy2chphSmQebTb6q6tCkJY39BfDxbXBpRpQ/xvfrK53f7m0/Fl9rcPyn69LCbTH68z9Ao81bLzKMr143hPlDCWS/+uQO9iJalaPh/qXCpGv5KpZXrv4i0bxRiYejttOr4tShSQqAPL9dyQqXQxhbUcks3/Hzi8JqiCSawRhgn/XLZv3POcYLjKIxnUegoJrcuekrE8wAfDrDnJggJcoMOPwHpj/sZ4AMAAA==", "base64"));
  res.end();

  return __filename;
};
