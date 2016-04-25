/**
 * GET /services/rest?photo_id=23427196175&share_code=J64o56&share_owner=40575690@N00&gp_code=J64o56&gp_owner=40575690@N00&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=iE3Gi5YaMOlFEcLVZDewrL9PE7g=&method=flickr.photosets.getContext
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "473");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www311.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts109.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WV246bMBCGX6XydTaMzyZXfYJ9gVIh1piG3XAQONlWUd69A9vGWK0qFZE7ezD//PMxg6/EdufWk8OV5LZrvZvWhApy25F+cJf+2PlunB7PK3L4ciV1iUcYF0zTVABIsiOjs4Ob3pRWFAxEpewcHS5umKKG4bYqhoYc6I742p8chj9h8DyccJUlH4my5LVu3o9107sfWbLIkSV1myWj80+aUamVokawVCrcZQnK+OO5eUGho/f9eMiSLJmy0f3oC1/b6lTbt2FvuyZL0EuknAfL+bh/7b+hWuPKukC1j5p3pHtv5zoESC1VCp+fATCMqq4dp0qm8saicnN59ZhXxcUhJbjtfuNiBgCYkYovcYHRqdIl5zrCpYW581L/wSskWcdL/Y0Xmomk82D6kcC4AAo0ZUItgWnDdWms/YXx3l9crQIWkmwIDM1E0nkw/QBgX3FSW/fd/2NSuRBK4rejS5K8AmqdBB5PqmawjuQ9yZatxyCSzoPph7Yep0azNJ3/WmFWS2tpVWkJcevByta7J9my9UBF0nkw/dCfm06NERKEWAKjFS1fuKFSxR2mV90FIceGd4HWkXIeLG+BC/6c1MkDnuneyO0nU9wIi3sHAAA=", "base64"));
  res.end();
};
