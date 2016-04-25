/**
 * GET /services/rest?method=flickr.photos.getContext&photo_id=22905866885&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=3OAvI2NJK8/xzwdJhGmKRVLzFxg=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "530");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm007.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts121.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WUTY+bMBCG/wryGQV/YAM59ePQQ9WeeisVcoxZvAs4sp2kUZT/XpNVIV6hZqU0NzMez7zz6B1OQOjd4MD6BCqhByfHM84hPsdga+R+22qn7Xh9OYH1zxNQNVgDjAsIKYEFoSAGVgoj/UvABMMZZTyDl6jZS+OjlOXMfzfc9GDNYuCU66SPf1ODNLyLvqrhyd/vTOeDZfLatEyeVX9oVb+VxzK56lcmavib5IzkfZn4x67d9Rv/vHVua9dlUiZjO7ayjjslmk6JF7MS2iePaoKC1ay6sqvn7aill7Xivtzr2DHQh+EySgqpzyzgh+9wHNGXlYMdZ8HjwLzxRxQDZauG76UHBc/xRCxHtCAYInxNTIo6FVlRYxwQy9JFYl86bY5Rw2tpbwKb2t0NzIsJClaz6IcCyxhCmBUXFBMwhDlK0QYW6RuLFYvAtK6jXpvhPRab+v0HixVBwWpW/QBiv/y2DvK3+8e2UshShjDJrlGmTZ6RDGeiDr2H6BLKj9Ybz0TcRgcZ+d9GV0dP+ibTqfH9LkQ0KFjN8h/qQoIpJTjL02t0G4kKiUgt8gBdDhdd+Fl7WJudi0QnPULXKvtuU07t7wboxQUFq3mIRwIkkOU5pBgGawwFSQkjQtIQICJLAH+0MvrEnZPmeAvY3O5+YIgEBatZ9IO2eBThc/QLOP8BRsYJSpsHAAA=", "base64"));
  res.end();
};
