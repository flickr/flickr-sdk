/**
 * GET /services/rest?method=flickr.groups.getInfo&group_id=2377207@N24&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=UK6qF6x2/8RrObT6lajRRXJ3yUk=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "439");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www287.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts121.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA21STW/bMAz9K4IuuxiFP9K59Wk7FD1tKLDcDVpiY22yaEhyhqDIfx8lxwkWFIgR8j2RfPz4kAdPyyy7D2m07GTdtG1dtt9+1jtZyBni2IM1EJhi3yhyAf0RPfttUz9fsHfwk+yeCulgwpSrZzCii/xs//Jr34m3ZbBGiddc7FxIjUF5M0dD7u79d3cih0KBE7/JuELADZgpxEI4EhNp9JCiBf/mkSKFh5TXLxbDXcaETzgN6O+ZJlEzkWVsSch/bJXYSLNRn9JrsDdHUKfPKAvuIDu3WMtDCqnKRTXyoEuWShepqzYO+7EarHZ9SBm82oUEPRmXZpT/N+2e/oYsN9Xpt2zV6t0ylRm4pGB2sBDue9qP6FEAf9oEtYTAEw7COBFHE0Q+FTEskV08fTmiCMYpFAOiSwEwWNQPLENzk33Oz/V06ldWu7KpmqbaNcwvfER9vrfH6vmp/VrnSY+eYrT5fpJsZh0vPm8VQ/RGpX3nia0L7+lPbuRoNN48M8EBrx5fGYu7uuDjlYF33OxtMdkvb/VQb8gIoT8gsX1mPSFCmhZz53+E52mbQQMAAA==", "base64"));
  res.end();
};
