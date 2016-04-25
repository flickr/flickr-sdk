/**
 * GET /services/rest?photoset_id=72157657634723246&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=074xSqhvhO6QgLAcWrJluzBUa80=&method=flickr.photosets.getPhotos
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "970");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm022.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts115.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA62WXW/bNhSG/wqn61zwW6SvtnbpNuyrQAb0YhgMSqRsrpJoUHRcr8h/36GcOGbj9KYCDMEkJfI5L99zyM/VbhtSmFyqVp8rb6tVVVMiagk/xmvKKJfVTbWLfjDxCKMUU6ooJVIx6A+H0UXo5VjUQmr8/R8YP3WPZnAw9K8fDls/7Nwxz5MXq1Z/Py5VTja5NmaOSkurDGbKirk33s9riJpklM7EoVrJmyr51OcF7pKJyY8bZBJKW4cat/HjCB03yJojIigFdGfGZNDbuP8PZvDTczjk1N43vW+rFcmNLno3Ah2eG2bw/XFuTKaD5cjDzRleKiEIkxxfwvOGd7V1TOhL+JqRMzt5Zn8XnUO38ErbOxPRtA0HFMbHMEy7RX58nR1/G7tmuhZ1wS6ZahouCHGX7KcAX7DfpWgOjYvxiN5519sJdSE6+ATQ08G5S3JkRot+D2Ny0R1zhHln6JLxqBpiwlLSwkiECKEbIVVhpNltL+K5BcTQnchWyGXW7Ko3foPu9nFJ1ppQToUQhfai1kZZTnlXaK/pNdYf0Ohbh3a9gSf4u/Ojn7bIoOitWxa1lpSzEtVwYTtpDLOFrJKTa/n5I2QjmKIPrUk+jN9Khy/oqJKUKF3zwsRtY0Bb1nwhpLwm5J+nZEtbH+289QeHopuSs0uqqAnsI6lVYU7WcNrhTuO2VPEVcz7a0aAR8JYUkWEFP6GLEuwIba0mHS4zR85V7cUW/+pPudNDyUfu0w5QB0igKZev6IaQHGoh+WPoe2fRT+F9DEvKywjGAnK9iKA1DkpCgw0uDxEhrpoUtp6v0O0nnxZM+kuZa66wFFSo0quctJrXXeEBya97dZ+zaNzA/s9WPbqEmmyKCe2nXAXe+2kI6E0+OBatAbImmgmlL8k72gkGFmZfuJfX1+T9BW39ZtsfwQ1tGMAbNleqrPQxQFSN/+iQwBgBhZtDmbsPzuZ3FjU7Y4ITQoqKQVosqYBHed+QSr1mFQlWyRn5fFIvapUaaygWtCi6jBmqCYeiV/qZ0q9AQjUbjHXIpyzqGfa7Je3BCVaaKlVI2lndNR2cvKS8BYlrxv5QUP4WcgIuhPkP3DnNxs1vQ1lanxpgtbl52YK/04kqJNNnV2TWM+LpCot+Pg5mRB9OxkR/hblGWDe10e/m021VQUcb9mNa33t3mPJETM/ga7NPYb3f9cHY9XzjniOa78Tr+ZOnVe/hFD934af5Tjf1tenPdEX/ky5Xhp5Uujb0qNmrXxVvPICyyWTO8LF6+B/TXYU5PQwAAA==", "base64"));
  res.end();
};
