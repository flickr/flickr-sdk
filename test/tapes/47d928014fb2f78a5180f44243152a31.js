var path = require("path");

/**
 * GET /services/rest?test=value&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=x0DAi/RsJ/NwA9zxA7G8QKN6l68=&method=flickr.test.echo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Sun, 08 May 2016 23:02:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "332");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www247.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts120.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52SzU7DMBCE3yVn2jp2vLGROEQgUYGoBFwrRY6zoSE/rmKnFKq+O3EvVFY5wG2l/WZnx95D5NC66PoQ5dr0DvupjnaqHTE6XkVGjW7jG3bscMgb/AxIEAqoVlBqXXLOtEokEpBlUoBAScufIc402AfqlMY8BSBMJpRLBjCLYyo5L0Bz4BKh+NHvcLC1CSfEc3JmUXdTFtVtAyiRMmYpkDO0N73GAKsUKSgtCZYFk5RTYESxhFWSF4xJIWQsFEV2lsnWb71y44B5h25jymDg8im7nb0us9grKjN0Knzodzslmpq98ZVWbVso3YQZLxgGyJ7cZfV68WIf1ovVRya/9ll6L54fV9CCuPH6iwtWba2bYe4vYI56YzyotnV+8qptfjK9tI2H/ncMXjml+PP+v96Qb06f7kvTRMdvlp3Uh9ACAAA=", "base64"));
  res.end();

  return __filename;
};
