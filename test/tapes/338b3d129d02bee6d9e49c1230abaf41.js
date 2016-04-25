/**
 * GET /services/rest?photo_id=21132240942&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=bdGw6k8VbgRWiP0nDwHZU3OkNgc=&method=flickr.photos.getInfo
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "866");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www65.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts105.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA51V23LjNgz9FQ2fHVlXS9ZTk2132rS7O3vJ5qHuZGiKlrimSA1JWXUy+fcCtBzb2Xam7ZNNEDg4wAGhJ9K32mlSPRFRk4okcZwmSRYts4TMiOXMcAfmdZ7lLC4Yj73V7LgBa77ICjhvqOlItZiRmjo+9FLTmiNWnGVxWpZRiUHCbuhOG+E4qaIZkYJxZTlmRES64W7/IPmOSzBFYDLaUSe08t4Q1whF5QufmMcxLYtkk5HT7UabjuLtt75B86iQ5RNR1peWRXmRL5bRD+8jTDBAGYp2SOGb6MZWdD3fY2JO5WS/FV1w/3IhNZsYkc9UBW8NVUxYpmfBnYKy6uAzMOYWa2VanZpUptFke2lUT137QKWg9jL784w44SRH1g8Q4LjCem4o2wZOB3s9mMDwZpDUyH1gWcvrQULm3ujG0K4TqkGMmltmRH8ge4GEtzthxVpI4fZeddsPa1CDVLEXyQiuat90VKwTEryi54O2FgN6bd338jq65diZJIrzq2h5FWVBVFRxVGXl8RYYKmTuE3uNvXlQWwVSTSZJrRt6THbIkJdlDrodePMR+7XIUnDktXD0VAYDMXTX+SqhEDjSuu64o3CE2EON/z4GKx4sbfjkVwNDnOuj41rq5vi/NwIRIn+wLTX8kHPCtq8kiLAWpadu4h9S/f4HcuS6P0jfUns8IBFHG+8Lv5PraRSfoGMwMkON/UqLsFjm5SLz06qao/0qTpIwS8skQTEoY4OhDEWIc4I8gdqfbhJAcdG0axi0Vuv6FfU3egx+1lLqERx7SRl/8C9r2Yf6Nn375W69dIsf+ePuI9yPmh82SprHSZR4CZH3sftnuBfP6RK6CN/dfirdl6/mlw/xT83NOXBWQrUL4ls9qP+CGhb2Qyc/fbz7bal+DbfvHq/PcOMkL4si8oThsX3/iN5ADbBrlKCXqO/t+u5+cwNtyLr1/utw0YQMdk/6wtW8Jvt6hZzBqsewsU2LsCy5v+bs+hI4yZaFJ/t/FGlgzrjp7N+sAiRHmTvugn9aDIORPhp+YTphSvc9zpz/rPT4gmbndbbO9bZazVfzcRzDDWTbmhBeymruA+xqflqHq/nZ12g1J884+vip8Cw6eM30mAhLsc4vf70lz38BgXv7WtYGAAA=", "base64"));
  res.end();
};
