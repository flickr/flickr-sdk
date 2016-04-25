/**
 * GET /services/rest?photo_id=22905866885&num_next=3&num_prev=3&order_by=random&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=zFna9dND9z2UHbwTYD6dDvGuCEk=&method=flickr.photos.getContext
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:10:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "530");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www45.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts106.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WUTY+bMBCG/wryOQr+wAZyancPPVTtqbdSIceYxbuAI9tJGkX73ztkVQirqFkpzc2MxzPvPHqHI1J22we0OqJS2T7o4UyzBL8u0Mbp3aaxwfrh+nRCq59HZCq0QpTmGHOGc8bRAnmtnIaXSChBUy5kik9Rt9MOolxkAr5r6Tq0EgsUTGg1xL+ZXjvZRl9N/wT3W9dCsIjfmhbxs+n2jek2+lDEZ/2K2PR/k4LTsitieByabbeG500IG78q4iIe2omlDzIYVbdGvbilspA8qJkVLCfVpV8+bwYtna6MhHJvYy+Q3fenURLMITPHn77jYUQoq3s/zEKHgWUNR7JAxpe13GkABSBHYhnhOaOY0HNiWlWJSvOK0hmxNLlI7Etr3SGqZaX9VWBju5uBgZhZwXISfVdgqSCEivyEYgRGqCQJWeM8eWex/CIwa6uos67/iMXGfv/BYvmsYDmpvgOxX7Ctvf4d/rGtHItEEMrSc5RJnaUspamq5t4j/BLKzx6M5yLpo72O4LfRVtGTvcp0bHy7CwmfFSwn+Xd1IaOcM5pmyTm6tSa5JqxS2Qxdhi+68NECrPU2RKrVgDA0xn/YlGP7mwGCuFnBchringAZFlmGOcWzNcaKJUwwpfkcIGGXAP5odPQgQ9DucA3Y1O52YITNCpaT6Dtt8SACcuwLev0DvN1HUZsHAAA=", "base64"));
  res.end();
};
