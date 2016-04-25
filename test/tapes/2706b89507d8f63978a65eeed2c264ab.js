/**
 * GET /services/rest?photo_id=19963559813&user_id=12289718@N00&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=jPgXrvOCs78N9JD3RD4IVqWobns=&method=flickr.favorites.getContext
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "645");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www303.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts103.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA6WVwY6bMBCGXwX50kua2GDHdk6V2nO1UnsrFXKMCW4AI9vstl3tu3dItEvQok3bXMAYz8w/H/7NI9Ju6CLaPaJCuy6acYyIzCh6WqHem/u+dtGFccFphHbfHpEtT4sYFhnLMkzRCgWjvRlj95hqqdKUkNOsvzceZqnM4LFSvkU7skLRxsbA9J2L3niXfBm6ANErNPgGpvPNuSrcwy9dK0ieby7q5Rvb5ZtK3ZvwPujaNk2+geBYD+0ewusY+7DLN+MS35J1iCpaXTVWH/1auzbfgJxZwmJSXYT1j/4A2VpTWgXZzm2vkHvozq1sIZBI8uEzxjANWQ2IhxfjU1CVOXVoQzHqA1D4afVCTGLBUyEyfElM7KnhdM9KMSPG6BKxcxcLpEp3VGFs6qXG7ZQYnSUsJqVXKWVblhIpCKMcQJEZKHIdlKBcYIkzdgmKY6HNlpgKz0ARvLi1jK+Mjsmd6VrVhdr26wVqjf3dqL4f23wpeTs3gmcJi0n4VW6SilQQMkJjf7e7voNRO/MzvmFUKRkTgqTZ3KiSa/iiQl/SZJxNOLcTTgtng+9dMIk3wZbD0C7Q1KqPtis6V572zXPVfwK6XQA6ipplLCbxV4mCySln/+PXFIttBh+R0/k2ZBV4opR4dsKxbcqXwH2tTXJQ3eFdSFTTJLXxZp3kQykyDdeKi4uxXGBaOTiEjS/twUYF4C5E3c4VNM8yFlNvV7mKlHOZYvaK61V7p+OBggVjc65G7EuZUkrkJVfOyZK9P3rb940pk0+2c0ENS0eiZA+u3at4avG54s3uBkGzhMWk+/q/Q1LK4e/xhrvxa3ePGmCNO6KnP8CvlICwBwAA", "base64"));
  res.end();
};
