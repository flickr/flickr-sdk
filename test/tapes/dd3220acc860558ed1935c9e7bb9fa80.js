/**
 * GET /services/rest?method=flickr.photosets.getContext&photo_id=20310059113&photoset_id=72157657634723246&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=k+17DzNGZvTjB3Ilb2hBQQcPvyU=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "639");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www289.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts112.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WVX2vbMBTFv4rQc1ZLtiXbeRpjY4zB1vd5GP+5jtXaVpCUpqH0u+/KZXE8wjJGAibYinR0z4+jqxda693o6PqFFrUeHfh3ygV9XdGtgadtp522/u/pja5/vFDV4JSQJXHKpAhFSlfUQm3Ar5R1zOssTtp6GjVPYPxoLPGzLc1A13xFnXI94PD3nSG9HjdgHWnKAzmAI5VR48aSnSVOk3tlB00+QFl3uH5nelyUB2815cGDGvadGrZwyIOTcvJAjXlgwb1LQi4SiU8UJ2EUxjIPUMZ1u6FCoc65rV3nQR74wviddaVTddur+tHc1XrIA+lXnCgXs7vC3j1sN6g2QKNKVHvDs6J6P06WYyYSITP2/htjOIyqMFpvOvRgyhYmEsoWbfkECJS9rmayMuFZJNLslGwbtiKKqjhakBUyTo5o5Yz2C+nUpusPxABaGWBsiFENoiUHjdQr9QhEMEYG1cOEehreQ+PnXGb9u8D/Yy3PsPZGFtLFbPimsKMoEjHnPD6FzWsmQ4E/Ygk7Tc/B/ojZlWvyCY+PIa4DUv1TYo87X5Nimi6ki9nJNSiyJcWf2CVGeHZ/6RIRS/ERWXSKF3hYNxlvWbrEK7JzeL8qTK9uSV8OQOB5C0ZhoJ0lasR4D9oB8a3L6L6HhnzW90ZfZv+7rGuyF9lCupht3jTBGZdZyJM0PEWMBydsWZuxP9pFdK4RT8n1zaEkIzbji/SOO16v12JlC+ViNnCD4M7wwlSGPM2SxfGXdVUKwaKqXdxi2flbbJzOvOuUaaZrbA8YS+twp0scj5tf8c7K5EK5mL3cIIS+AfgacI5+pK+/ANwKAfNOCAAA", "base64"));
  res.end();
};
