/**
 * GET /services/rest?method=flickr.photos.people.getContext&photo_id=10413599525&path_alias=norby&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=IZlW6SsF3N9Sw21Cp70D0k/QAhw=
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
  res.setHeader("content-length", "589");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www333.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts121.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WUS6/TMBCF/0rkdWj8SPzo6rIAseEKhFgRFCWu05omdpU4BVT1v+O0lyaBoFKp3bkT+8w5n2Z6ANJ2xoHlAWTSGqf6M0CEg2MIdo3a7zbW2bb/fjqB5ZcD0Kv+DiQwgYhCloAQtEo2qn8qCcnLUooEnqrNXjW+ygii/neZNzVY8hA47Srl68+2KX4G2gRuo4Jar1a+GoKuqfy3NDr3TqO6c21XdGk06plG2vy+YctXphdKI//Ybbq68M83zu3aZRqlUd+VL1qXOy3LSstts5C2TqPe1EQzG8xn7eLbbu3larXSuZc7pw+B/W7OiZggiDH49AyJL3tZZdo+0il3XvojDIFuszLfK88LHsMXcIIRgnGCBRlzo5IzTKSU8ZQbh3Pc3p5ivPsYPAVx8Pr9DLNWbnRVpdHQ7S7EOBxLZoPrq8AQxlwwxD0wOAGGrwGLoaCCcsTHvGBexkWpqCrHvBAVF1xowHXKOgNJV91+p3aqsWl06XIjJzTDydsYCWaD1+tjBbHAlMd/URrGCk0pffWLatQP9+9FxTgmjBKKJ4saKyoIFQlSY4BJzPmFIB0IfmjsqpNOWxO8MWttlGq0WQefzaeurrWbYdtVrslra7daeSCDhxvx0hm8vcmJZjaEuUoYMxInkLH/JxxOQBIGxQSkijkluCgoHYPEnOALSHJnkCcPN4IkMyB7kxPNbAjzaJDcbwec/AWqREgoEZbij4nEj5rIs4f7TCSeaGZDmAeA7He+N+Hv2C04/gJL7RvKxQcAAA==", "base64"));
  res.end();
};
