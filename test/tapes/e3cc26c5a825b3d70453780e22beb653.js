/**
 * GET /services/rest?method=flickr.photos.getInfo&photo_id=21132240942&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=bdGw6k8VbgRWiP0nDwHZU3OkNgc=
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Jan 2016 00:53:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "866");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www42.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "0");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts119.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA51VTXPbNhD9KxycZQmkSJHiqXbaTOs2yeTD8aHqeCAQIhGBAAcAxcoe//fuQpQlOe1M2xOJBfbt232LxRPpGuMNKZ+IrEhJkjieJ0lKl2lCJsQJboUH8zpLMx7nXMTBanfCgjVbpDmsN8y2pFxMSMW86DtlWCUQK07TeF4UtEAn6TZsZ6z0gpR0QpTkQjuBERGRbYTfPyixEwpMFEzWeOal0eE0+NVSM/XCJxZxzIo82aTktLsxtmW4+62r0TxoZPlEtAuppTTLs8WS/vCeYoAe0tCsRQrfZDs0su3EHgMLpkb7rWyj+5cNZfjIiHxmOnprmebScTOJ7jSkVUWfgbFwmCs3+lSkYk5H20uhOuabB6Ykc5fRnyfES68Esn4ABy805nPD+DbyJtqb3kZW1L1iVu0jxxtR9Qoid9bUlrWt1DViVMJxK7sD2Qsk3N1JJ9dSSb8PqruuX4MapIyDSFYKXYWio2KtVHCKPh+0dejQGee/l9ezrcDKJDTOrujyiqYRzcuYlmlx3AWGGpmHwEHjYO71VoNUo0kx5/sOgx0iZEWRgW4H3mLAemUZtoyopGenNDiIYdo2ZAmJwJJVVSs8gyX4HnL89z6Yce9YLcZzFTDEvj4eXCtTH/87KxGBhoVrmBWHmCO2eyUBxVy0GauJP6T8/Q/kKEx3kL5h7rhAIp7V4Sx8x6OnVnyCikHL9BXWa55P82VWLNLQrbo+2q/iJJmm8yJJUAzGeW8ZRxHijCBPoPanHwXQQtbNGhqtMaZ6Rf2NGaKfjVJmgIOdYlw8hJu17Kbmdv72y9166Rc/isfdR9gfjDhMlHkWJzQJEiLvY/XPcC+u0yV0Pn13+6nwX77aXz7EP9U358BpAdkuSCh1r/8L6jR3H1r16ePdb0v963T77vH6DDdOsiLPaSAMl+37S/QGcoBZoyW7RH3v1nf3mxsoQ9qu91/7iyKkMHvmL1zta7KvR8gZrH6c1q5uEJYn99eCX18CJ+kyD2T/jyI19JmwrfubUYDkGPfHWfBPg6G3KnjDF7oTunTfYc+FZ6XDGzQ5z7PxvnPlaraaDcMw3UC0rZ3CTVnNgoNbzU7jcDU7e41WM/KMrY9PRSDYwm1mx0CYivNh+Jstef4L0VHfsdYGAAA=", "base64"));
  res.end();
};
