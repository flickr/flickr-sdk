/**
 * GET /services/rest?method=flickr.photos.getContext&photo_id=22905866885&num_next=3&num_prev=3&order_by=random&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=zFna9dND9z2UHbwTYD6dDvGuCEk=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 19 Apr 2016 21:52:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "530");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www297.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts107.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WUTY+bMBCG/wryGQV/YAM59ePQQ9WeeisVcoxZvAs4sp2kUZT/XpNVIV6hZqU0NzMez7zz6B1OQOjd4MD6BCqhByfHM85JcY7B1sj9ttVO2/H6cgLrnyegarAGGBcQUgILQkEMrBRG+peACYYzyngGL1Gzl8ZHKcuZ/2646cGaxcAp10kf/6YGaXgXfVXDk7/fmc4Hy+S1aZk8q/7Qqn4rj2Vy1a9M1PA3yRnJ+zLxj1276zf+eevc1q7LpEzGdmxlHXdKNJ0SL2YltE8e1QQFq1l1ZVfP21FLL2vFfbnXsWOgD8NllBRSn1nAD9/hOKIvKwc7zoLHgXnjjygGylYN30sPCp7jiViOaEEwRPiamBR1KrKixjgglqWLxL502hyjhtfS3gQ2tbsbmBcTFKxm0Q8FljGEMCsuKCZgCHOUog0s0jcWKxaBaV1HvTbDeyw29fsPFiuCgtWs+gHEfvltHeRv949tpZClDGGSXaNMmzwjGc5EHXoP0SWUH603nom4jQ4y8r+Nro6e9E2mU+P7XYhoULCa5T/UhQRTSnCWp9foNhIVEpFa5AG6HC668LP2sDY7F4lOeoSuVfbdppza3w3QiwsKVvMQjwRIIMtzSDEM1hgKkhJGhKQhQESWAP5oZfSJOyfN8Rawud39wBAJClaz6Adt8SjC5+gXcP4DeemyGJsHAAA=", "base64"));
  res.end();
};
