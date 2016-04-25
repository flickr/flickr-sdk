/**
 * GET /services/rest?method=flickr.groups.pools.getContext&photo_id=23370228492&group_path_alias=circle&num_next=3&num_prev=3&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=A5zo25ZWwh62SseIf68MMUjxQFg=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "543");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www291.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts117.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA7WU3Y6bMBCFXwX5mgb/gMG56hP0BUqFjDGLu8ROjUm6ivLuHbJKgCpSU0W5M9b4zJlPZzgh5UYb0PaEKuVs0NMZkZxhkqNzjPZeH/adC26YSi4ntP1+QqaBMspYjillaU5RjAatvJ5eU45JJlKcNpdbf9AebrNcpPDdSr9DWx6jYEKv4f7ovI3cGKK2d85Hg3mz0dHs6l43zkZDkME4Cw9H30N1mXy6KRPBUoI5JV+/4axMFlbKxFgoc67/ooxXvS4TeB66cVeDQBfCftiWSZlMTvjm0kC1vVHvfqPcrkwmoyvBah6oGjY/928gt9ONkSD3SSRG7mgvUy5dwTXIajtMY5KJhWzhSGJkhqqVBw0M8Tm+wSQFFTnNCF7CzJuMCiwYJSuYPLsL07tae0ApezXBUy6EqDfQKeq01w9QvHl4miI4XAlW8ySvpUhwzkXKxZKi5k3RcoElW1LMKb5BJDPEqUH4iDoZVPcIsmvD/0FG7iADOyu9anb9AmI/YLut/h3+sd0MF+Kv7RZMSZWlch3Igt8L5NA7aXU0/BrlQ/m7tXw+fwVfCVaz8ZfmjwlOWcY4WUIrMG0KoVSxgsZ5cS9/Y7D6I6q9ad4eIXbt92z8wM1Kr5pNvxxYmkLul8DaWkupNVd0DYzfA+Y1/OCOnQk6gr9e3Y8PJe3a9nlufKVXzd5ftLaTB6hx7+j8B34eIKrABwAA", "base64"));
  res.end();
};
