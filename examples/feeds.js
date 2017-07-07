var Flickr = require('..');

// create a new feeds instance
var feeds = new Flickr.Feeds();

// get the most recent public photos
feeds.publicPhotos().then(function (res) {
	console.log(res.body);
}, function (err) {
	console.log('got error', err.message);
});
