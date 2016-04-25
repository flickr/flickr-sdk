/**
 * GET /services/rest?method=flickr.galleries.getContext&photo_id=14164585394&gallery_id=jimwhimpey-72157644619042552&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=F3zW+c5Ui43P6lDny5b8W8hAoKI=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "513");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm017.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts117.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WVTW+jMBCG/4vPNNj4O6fueaX2tpdlhRxjEhq+BE66UZT/vrarDVA1Eodywgww77wPnvEV6PbUWLC9gky3jTV+jcQtAl1vzt2hte3gH4YV2P6+gjIHW4AIYghxQSECERiM7o37DkBNpSrQDpoQ7c+md9FEYubuC9XXYIsjYEtbGRf/+frrB0LYZzj1lQuk8YdgGh/bswrrfe+ulzSeCKZx2aTxXlWV6S9Pb2X9fijrzlyeeIIoZ4QwJCFJKE3S2KW2h1O9c8kP1nbDNo3T2BeCN4NVttRFVepjv9Ftnca+zplSNvrJhs1bt3fpapOXyqX7ABKB9r0JJhlEUEAunl8gcWGX1jSDdwk9ClW4JYxAOWSFOhuHEN6ikaUgVDAo8JSlYAzywpmhM5ZC0scsE7GQ5X/B9Vi6OmdK2ehnTZZYci6IwBBOWTKFc/8flZqypBTKO0s2Zwk5XMZyFPwWluwLlr7OmVI2+lmB5R/X/I35ax83f6iEIiL4FLLhVBGhFd/NICPJHkFGCcPLIQfB9SC7OmdK2ehn9Q2LBQmte2epc2NypjWXU5YcY3JnKT6zlGQ5yyD4LSzFFyx9nTOlbPSz+iBlCSOzQZojqSlSmHw+lJKHgzQJO3vhIA2Cax5KyUwpG/2s1Py+CPdOewS3f6e5gcAfCAAA", "base64"));
  res.end();
};
