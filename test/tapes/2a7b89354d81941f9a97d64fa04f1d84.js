/**
 * GET /services/rest?method=flickr.favorites.getContext&photo_id=19963559813&path_alias=schill&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=6cQ2ZWPYjUrzZKspT5O8dUgmkVY=
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
  res.setHeader("content-length", "651");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www258.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts121.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA6WVwY6bMBCGXwX50kua2GDHdk6V2nO1UnsrFXKMCe4CRrbZbbvad++QaJegpUmrHAhm4pn552PGPCHthi6i3RMqtOuiGdeIyIyg5xXqvXnoaxddGDccV2j37QnZ8riJYZGxLMMUrVAw2pvRd4+plipNCTla/YPxYKUyg8dK+RbtyApFGxsD5jsXvfEu+TJ0AbxXaPANmPPNKSvcwy9dKwieb87y5Rvb5ZtKPZjwPujaNk2+AedYD+0e3OsY+7DLN+MW35J1iCpaXTVW3/u1dm2+ATmzgMWkugjrH/0BorWmtAqincpeIffYnUrZgiOR5MNnjMEMUQ2Ihz/Gp6AqWOIVsqEY9QEo/Lx6JSax4KkQGT4nJvbUcLpnpZgRY3SJ2KmKBVKlu1dhLOo1x+2UGJ0FLCalVyllW5YSKQijHECRGShyHZSgXGCJM3YOimOhzZaYCs9AEbzYWsZXRsfkznSt6kJt+/UCtcb+blTfj2W+prydG8GzgMUk/Co3SUUqCBmhsb90F5lD+w6D2pmf8cKgSsmYECTN5oMquYY3KvQ5TcbZhHM74bRwNvjeBZN4E2w5DO0CTa36aLuic+Wxb16y/hfQ7QLQUdQsYjGJv0oUhpxydnFeyXIbplhsM3iJnM7bkFUwE6XEsxOObVO+BO5rbZKD6g7vQqKaJqmNN+skH0qRafituDhbywWmlYND2PjSHmxUAO5M1O1cQfMsYjHVdpWrSDmXKWZvuJJ/4MrhYmzO1Yh9KVNKiTznyjlZGu+P3vZ9Y8rkk+1cUMPSkSjZo2v3Kh5LfMl483SDoFnAYtJ9/dshKeXw9bgw3fjtdI8aYI+7R89/AE0ilaawBwAA", "base64"));
  res.end();
};
