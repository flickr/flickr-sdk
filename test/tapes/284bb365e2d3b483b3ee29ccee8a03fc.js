/**
 * GET /services/rest?photo_id=21132240942&extras=sizes&hermes=1&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=baGDHwUoUBHb9pqR2mH0C0RSjt4=&method=flickr.photos.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "1557");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www62.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "1");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts130.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("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", "base64"));
  res.end();
};
