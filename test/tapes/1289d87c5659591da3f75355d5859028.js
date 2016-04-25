/**
 * GET /services/rest?method=flickr.explore.getContext&photo_id=23476330905&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=Sqb5MXokW1hlPloAjhZjfwC5dP0=
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
  res.setHeader("content-length", "629");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm012.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts106.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA62VT2+bQBDFvwrdS1vJMft/F5/aSpXaQ3poj6VCm/Vg02CgsHYjRfnuHewmgITqpPINj+HNmx/zlnvi630VyOqeZL6uAvTXitKHBWlaODTbOtRd/+/xiqy+35NiTVaEC6EZp4lUnCxIB74FfJD4NTUajNTJsdoeoMWq0RJ/5q7dkRVbkFCEErB83Xd2RRU14G47vGPfllhO41PXNK7Ljdu4Q1uU9cGl8ahnGhdVGsNdU9YtXHHK1BXjVxTrKBO2+90NCm1DaLpVGqdx35otu+BC4fOy8Lft0te7NEZjE9ls8J91y5/NBtV2sC4cqp0ALEj9uzoOpS03TCvx7gu1WEZVqLp+LNqP7nI4zlp0We4OgMgQ6SM7bqVKFLdMjtmtE03NjVPej9lpO8vum9+WsIUZaEYLlOccfSGOUa8LMUNDE9ls8H2W2djbC5kJmmiRJIlMxsysybkwYEGMmSlj6BM0PVo4V7m2Lt0MNSaYVOr0OnW/E0/t/gObnsHWe5roZoP3s9wm7p4H7gcmuIK78I8ES0O16Hd4StSLNfdM8EmCuZ3bwpR8grKsl9Hn8LqLriF6v8E8v0pJ9ObjCdj67QxsbRPJObV/V3QwcqlYczuRzYahnhHrwduEtD6/olIyK7SUenIkeku1twLcBChTc0Cb4g7KKLSumcOWGMYo1WjNHOd7bHcpbExNZLPB+nlsI28vTbawLNEcD+ExNgZG5Fp7pybJ1lzOJfsD5vrXHqKvkJfgQ1FXc98T7wIem8VmG7rT5+Sx8aUyju4mutkwxfmMU0MVTezzCfYR703gPfUtefgDVk0XTMsHAAA=", "base64"));
  res.end();
};
