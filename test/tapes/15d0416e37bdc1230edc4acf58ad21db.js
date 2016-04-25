/**
 * GET /tripod-aggr-api/buckets/cb817b67-8351-4ea9-9508-bc1f245f80cf/media?apiKey=49760ea97f808ec5474b43934e33973a
 *
 * host: tripod-aggr-api.v1.production.manhattan.gq1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: Y=v=1&n=abks4n820qsho&l=98cm78cf4o/o&p=m2nvvau012000000&iz=4163&r=go&lg=&intl=au;T=z=eV9nWBepksWB0f5dY2RORCINjEyMAY1MjJOMzUzNTU1&a=YAE&sk=DAApPvch13r81l&ks=EAAWvj8GyGmfvQsk75Rz0s2mQ--~E&d=c2wBTVRZMU53RXlOVFU1TkRJME1qSXkBYQFZQUUBZwFKSVlPUlNSU1VXU0pKN05YM0FTN082V1FIRQFzY2lkAUFmdHpZa1NQdmpFaUJVVHo0SEFnMVVXek54TS0BYWMBQUxlSE1ITXoBb2sBWlcwLQF0aXABdURRRVRDAXNjAWRlc2t0b3Bfd2ViAWZzATdqTVdHNmxXbjlWZQF6egFlVjluV0JBN0U-
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("content-type", "application/json; charset=UTF-8");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("date", "Wed, 27 Jan 2016 20:08:53 GMT");
  res.setHeader("age", "0");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAAA==", "base64"));
  res.write(new Buffer("zZfbjpswEED/xc9R8GV8If/Qt75VK2SMSdgmQIOrane1/17nso21razWMVvemAGZM2N8sF+QGXpne4c2X15Q16ANokAFBY4VULRC7mm0PjnuBjf48Pr050u2O+itLR5Hu/W3pu7ZTudhdD/0Twcf+uFavZ/syqf8sy5I/Ogat0Mbgims0M522517iyLv+H7c+9TOuXHaFIUh68lp15l235mvx7UZDgUpiMS8CIqoGMFK10qCqer147hFr6t/YqSAb4jnYEbCQxIhJkEXL1FuRmtr3fJGY1ENKYyEB108BzN28VsKoeQ3wNP1jHxTUgdx2EE8bwddCqEIV4qYeaU8XwgfToxv4lKKlEJJ8tHiEordXysvoQhqqJShjWqb1vAM3iIiw2xECJO8BaoUN0RGRQZvvWcERjEjVFFYirciXVyEtyJ893tLyFkB79cW0HkJf9cWk0Ch9EsBPlpbEjLUCkIWQQ2V4L5aVptG5dBWjg86Qpi43QIVIEKZQf7vGbkVlsgSPONCtBXp4iK0FeG7X1tyhikOADNoK4dYI4R/1hYnhKm/1NbYJ1uLS5H7kMjJtdRLCZXfUzKpjW3KNGsRxjMfEiOESdYi/ocUIFKsYvOUhNjIVnMCTW28tE7j/HdpRZq4CGlF+JKkxUXmI2IEMElaTOQ+IkYIf0nrwb9TT5+Go73yvP4EdvzOOvkSAAA=", "base64"));
  res.end();
};
