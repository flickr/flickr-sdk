var path = require("path");

/**
 * GET /services/rest?group_id=33051635@N00&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=RoSuMqviI+ErXhKNRhngq6n0D4o=&method=flickr.groups.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 27 Apr 2016 19:22:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "387");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www254.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts110.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA21SwW6DMAz9lShnVEFpN4nTpu26nXZHHjElWohRHJiqqf8+BwrVqp3we348P2x+9CnQOOjqR1ujK12W+bF4KI9P73muMz1A7GpwFlh6gm1DnjFMGAQ/FIfyyrUQel09ZtpDj8msFjKijyJ7gbZFT05fMm2Qm2CHaMnfqT46y2rOoqSIpIzlZmRWHfXYg0FlcEJHAwbeKfW6dMVHgTdqII6sqFVDR5F40xplk+D8j0sa01qPu5QrjA75LlHi5aVPGXjXKYu8TN2ByAk9JvKPYH/cH/ZJEWmwzb+SY/44WwQ7QXO+H5BaDvxJV350TnbMaVZPBgNElEPlkpmumZeQ8trbUkjsRUgzudWZBtNbWbx+np/rFwT6Tuct0i25Xt3yBd2cFuJqISB2gWJ087mTTCw8eZzXiRyDbdKZ54TLVWr60lWR6ckavCHbwwk3JL8Hot8ghLh1oMW1Xhcx4/w2D83KdMD1CUnqi+ThCGmt0rv8AkXI1tDxAgAA", "base64"));
  res.end();

  return __filename;
};
