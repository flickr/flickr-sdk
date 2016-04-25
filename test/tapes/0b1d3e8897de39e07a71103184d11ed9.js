/**
 * GET /services/rest?group_id=33051635@N00&api_key=68a62ca6dccd553ca49e069d4b68e92d&api_secret=92158779258d08db&format=json&nojsoncallback=1&method=flickr.groups.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "374");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www63.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts120.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA21RwW6DMAz9lShnVMEY7cZp03bdTrsjj5gSLcRREpiqqv8+B1qqVT1hv/fwe7GPcu9pdLI+Sq1kLcsyr4ptWb185rnMpIPYN2A0BOa41y3ZgH5Cz/22eCzPWAd+kPUukxYGTMMaBiPayLI36Dq0ZOQpkwpD67WLmuyN6qvXQcxZBBeRhNKhHUMQPQ04gEKhcEJDDn3YCPG+sDxHgFXCUYhBUCdcT5HCqlVCJ8HhzpRk02mLm5TLjwbDTaKE80/fbHjDlPnzU2IdkWF4TOA/wUNVlLukiOR0e1dS5bPAeT1Be7g1SJQBu5e1HY3hHYfkNZBCDxH5UDlnpnPmJST/9rEUHHsR0gyudSZBDZoXL1/n7+UFnn7TeQsWxN5TjGY+YRrCsCWL84owRK/bdLrZddl0Qz+yLjI5aYXXTg+wx7XjkyPatQUfVwY6vNSXx819fvVDdUF6CM0eiesT5wkR0qqYO/0BSiT3rcUCAAA=", "base64"));
  res.end();
};
