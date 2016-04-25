/**
 * GET /services/rest?method=flickr.photos.getInfo&photo_id=21132240942&extras=sizes&hermes=1&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=baGDHwUoUBHb9pqR2mH0C0RSjt4=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "1559");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www299.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts123.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("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", "base64"));
  res.end();
};
