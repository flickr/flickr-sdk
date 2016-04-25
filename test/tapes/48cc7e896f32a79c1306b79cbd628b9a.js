/**
 * GET /services/rest?method=flickr.groups.getInfo&group_id=33051635@N00&api_key=68a62ca6dccd553ca49e069d4b68e92d&api_secret=92158779258d08db&format=json&nojsoncallback=1
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "373");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www46.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts111.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA21RTW+DMAz9K1HOqILSD4nTpu26nXZHHjEQLcQoCUxV1f8+BwrVUE/Y7z38XuyrbBwNvSyuUitZyDxPj9kpP758pqlMZA+hLcFo8MxxryuyHt2IjvtTdsjvWA2uk8U5kRY6jMNKBgPawLI3qGu0ZOQtkQp95XQfNNmN6qvVXkxZBBeBhNK+GrwXLXXYgUKhcERDPTq/E+J9ZnmOAKtETz54QbXoWwrkV60SOgouT6ZEm1pb3MVcbjDoN4kizj99s+GGydP8HNmeyDA8RPCfYH847PdREajX1VPJMc2nEU6PUF22BpEyYBtZ2MEY3rGPXh0pdBCQD5VyZrpnnkPybx9zwbFnIU3gWicSVKd58fJ1+i4vcPQbz5uxILSOQjDTCeMQhi1ZnFaEPjhdxdNNrvOmS/qRRZbIUSt8dLqDBteOT45o1xZcWBmocamXx019+vBDtSAt+LJB4vrGeXyAuCrmbn/aEPUlxQIAAA==", "base64"));
  res.end();
};
