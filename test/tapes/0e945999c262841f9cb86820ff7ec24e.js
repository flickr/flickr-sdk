/**
 * GET /services/rest?photo_id=20310059113&photoset_id=72157657634723246&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=k+17DzNGZvTjB3Ilb2hBQQcPvyU=&method=flickr.photosets.getContext
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "638");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm012.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts116.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WVYW+bMBCG/4rlz1mxDTaQT9O0aZombf0+JkTgCG4AR8ZpGlX97ztTNYQpW6YpkVAEF/v13aO718+0NLve0eUzzUvTO/DvlEv6sqBbC4/bxjgz+L/HN7r88Ux1hUsEi6OEKSlkQhd0gNKC36nKiJdpFNflGLWPYH00UvhZF7ajS76gTrsWMPx9Z0lr+jUMjlTFgRzAkZXV/Xogu4E4Q+710BnyAYqywf072+KmLHjNKQsedLdvdLeFQxacpJMFus+CAdy7WHAZK3zCKBahiFQWoIxrdt0KhRrntsMyC7LAJ8bvBlc4XdatLjf2rjRdFii/40Q5n6rLh7uH7RrVOqh0gWqveBbU7Pux5IjJWKqUvf/GGIZRFfrBFy08mKKGkYQe8rp4BATKXhYTWRXzNJRJekq2FrUMw1UUzshKFcVHtGpC+4U0et20B2IBS+mgr4jVFaIlB4PUV3oDRDJGOt3CiHoM76Hyay6zfkvw/1irM6x9ITPpfCr4GrDZn2CHYSgjznl0CpuXTAmJP3IOO0nOwf6IvauW5BOOjyWuAbL6p449nnxNikkyk86nSm5A8Se6RA9P7i8uEbIEH5mGp3iBi7JKec2SOV6ZnsP7VWP3mpq0RQcEnrZgNTa0G4jusb0744B467KmbaEin829NZfZv6V1TfYynUnnU5k3tYuUq1TwOBGniHFwRM3qlP1mF+E5Ix4715tDQXo044v0jidez2sxs5lyPhVw0/EXiRI8SePZ+KtyVUjJwlU9u8XS87dYP868a7StxmtsD9iWg8OTLnE8Hn7FOytVM+V8quUGTegNwOeAa8yGvvwCQfDL/U4IAAA=", "base64"));
  res.end();
};
