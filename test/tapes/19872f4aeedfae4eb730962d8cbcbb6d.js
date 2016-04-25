var path = require("path");

/**
 * GET /services/rest?group_id=33051635@N00&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=zVcu9hmtYX2imLwcrkd2er89Yv8=&method=flickr.groups.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 27 Apr 2016 23:44:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "373");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www347.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts112.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA21RwW6DMAz9lShnVEEprcRp03bdTrsjj5gSLcQoCUxV1X+fE1qqVT1hv/fwe7HP8uhoGmV9llrJWpZlXhX7snr5zHOZyRFC34DR4JnjXrdkPboZHff7YldesQ7cIOtDJi0MGIc1DAa0gWVv0HVoychLJhX61ukxaLIPqq9ee5GyCC4CCaV9O3kvehpwAIVC4YyGRnR+I8T7wvIcAVaJkXzwgjox9hTIr1oldBScnkyJNp22uIm53GTQPySKOP/0zYYPTFnkZWRHIsPwFMF/gm213SVFoFG3TyVVfkgjnJ6hPT0aRMqAPcraTsbwjn30Gkihg4B8qJwz0zXzEpJ/+1gKjr0IKYFrnUlQg+bFy9f0vb3A0W88b8GC0DsKwaQTxiEMW7KYVoQ+ON3G0yXXZdMN/ci6yOSsFd47PcAR145PjmjXFlxYGejwVt8el/r87ofqhvTgmyMS1xfO4wPEVTF3+QO38oDJxQIAAA==", "base64"));
  res.end();

  return __filename;
};
