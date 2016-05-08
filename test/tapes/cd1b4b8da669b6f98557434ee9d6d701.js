var path = require("path");

/**
 * GET /services/rest?echo=hello world&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=tjTKNJpO/QoD5RyIZ3+abCtyLdE=&method=flickr.test.echo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Sun, 08 May 2016 23:10:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "339");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm001.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts113.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA52SSU/DMBCF/wryFVpiO3biShyqglR2sZwQUuRlQtIsrhIXVFX978S9EFnlALeR5nvz5tmzQ6ALi2Y7lGnbOmgdmqEC6tqefNmuNmh/hqzcuMK3+00DXVbBNuB5KjnRkhutDWNUy1hAxIWJFU9BkNEQZytoA3VCMEs4j6iICROU8wnGRDCmuGacCeDqR/8JXV/acAKeRiOLsoHeyWYdQLEQmCY8GqGtbTUEWC4jRYiJwCgqCCOcRpLGNBdMUSrSVOBUEqCjTH350Uq36SBrwBXWBAOX9/PF5GU5x16R266RLiBW/ZBoaLbWV1rWtZK6CjMeMQwQt3q9fbhZP76fP9lL9ry9fqOnUi3c9s5cXXj50f3yutRVN3XDo00PtzCAcl1mB6uyzw6ex5bx0P9uwSuHEH9d/9cL8s3hy31pK7T/BvzprdfUAgAA", "base64"));
  res.end();

  return __filename;
};
