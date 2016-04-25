/**
 * GET /services/rest?gallery_id=72157626831167487&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=0KbQF6IbX7TSw/UxICyWJOaouA8=&method=flickr.galleries.getPhotos
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "490");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www291.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts104.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7XUX2vbMBAA8K8i9OyB/p0k+2ltN/K0MbKyrYxRFFtORGwryMpKCPnuU5y0cx4Cpuve7g7Jvh8naY83Kx99j4s93pilxQXNhqA/RTacqkBIhqOPpsGFyk6bcPFzj12FCwxKA5FUC8AZ9k+dDakoc6oYpez9Z0JSubdlsDHVmbFQa5bzcqiG38NqTjRPeW1CiwuR/uVik/6LZ/e36JvtfItmwdouQ59MjMd4h+auj+mTqZEMu36zXTSuHLp2fR2c7VJnZEhM65rdkPSmtufq4ya41oTdsGNl+sfSt63tUofkkD27ZM4kSa2SCS6oJBhrNTUXLhD0mku90+j7ykWboQ/bco0+LpfottladLddmO5fWeQ6i4FkuUhTm8BSUlR1WVnCxyygTL6w5Jj144yxCbNImAzdrYJvLfLBdMtj6sNbTO06TwAopkFIOYFXGaG04JqJMU8Q/pcHY958fBpfbaGTLZJJSpXmUyx5DaxmlanLS4ti1yw3pavQg20a//T66zQZAwoYJ6BzNQVDOGULI8TFYBgX+gXDx5gbNHPBoy+uW6MMzW31/66P4CAVCJjyKtRSAgXIQV3MhI5ehdFMns/T6VlAvjsHs/uvb875dUhLozk26df48AeIp2q4CgYAAA==", "base64"));
  res.end();
};
