/**
 * GET /services/rest?method=flickr.photos.people.getContext&photo_id=16534539395&user_id=115771784@N02&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=v1dZCCjbqviO7ub13d9qNwyY7XI=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "492");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www51.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts127.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WVzY6bMBSFXwV5TQHb+C+rkWbfVXelQo6xEzoJRmDSVlHevTajCbE0HbUp2VnXl3PO/WSbM1B26hzYnEGtbOd0WANcgEsK+kGf+r11dgzb8wpsvp5B2/gWSAnGJcUCIpCCUatBz18qRaAyBd7O1eGkB19lJQldRg5HsOEpcK07aF9PfHEaDn5V5a9OVe4GeWrHvZ0O2jld5TdGVd52b43WfIKQMAYZL58+F37Pa7n9dNx6tb1z/bip8ioPljwbnXStModWvQyZsscqD4ki7XpJXo/Z937n5Y66aaWXex09BfZHN48jOIOUMeZ9iS97Wd2NYZ4iDC2NX8IUtGNt5El7WMUlvVLDJacQFpDdUvO+RnFsGhFRw4jeT+1qtCY1nyjSrpfka1ArPqZGRUytUVsFVYlRfNbwf5y1q9GqZw2jSLtekj+A2jd/dTv90/356hIBoSgxgeUtzlKhBjZ4q+ktTk4JvOIU/4hzMboTp3gHZ0gUaddL8ode3fmtQJBFDx6TwjSSMMliahTdTW0xWpUaRZF2vSR/LDWEBaII8/g3AZmhBdEwpsbfpfZsG53sbNvtkqlPbJfI5Mukx0b+yrLs74i+hViVKEeRdr1M9QCi4VqHEL7HvoDLbwkDcgO5BwAA", "base64"));
  res.end();
};
