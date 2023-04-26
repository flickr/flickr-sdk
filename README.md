# flickr-sdk

Almost certainly the best Flickr API client in the world for node and the browser

## Install

```
$ npm install flickr-sdk
```

## Usage

flickr-sdk is based on [superagent][] and all methods that make API calls will return a superagent Request instance configured for the request. This means that you can do anything with Flickr requests that you can do with superagent.

The Flickr API is divided into several services:

- The [REST API][services/api] service, which provides access to Flickr data
- The [OAuth][services/oauth] service, which authenticates users via OAuth 1.0
- The [Feeds][services/feeds] service, which provides feeds of public Flickr data
- The [Upload][services/upload] service, where you can upload photos!
- The [Replace][services/replace] service, where you can replace photos you previously uploaded

**Example**

``` js
const Flickr = require('flickr-sdk');

const flickr = new Flickr(process.env.FLICKR_API_KEY);

const { body } = await flickr.photos.getInfo({
  photo_id: 'your photo id here',
})
```

### Browser Usage

Since OAuth 1.0 requires your application's key and secret to sign requests, flickr-sdk does not support this authentication method in the browser. Upload, Replace, and REST API calls that require authentication will not work without a valid OAuth signature. You can still use flickr-sdk to call REST API methods that don't require authentication or to get public feeds.

flickr-sdk has been tested with [browserify][] but should work with other client-side module bundlers like [webpack][] and [rollup][]. If you need a standalone browser-ready version of flickr-sdk, each release on [npm](https://www.npmjs.com/package/flickr-sdk) will contain a browserified version of this module at `node_modules/flickr-sdk/flickr-sdk.js`. It is not minified.
<a name="Flickr"></a>

## Flickr
All of the [REST API][services/api] methods are available on the
[Flickr](#Flickr) prototype. Each method accepts a single parameter
which is an optional hash of arguments. Refer to the [REST API][services/api]
docs for the full list of methods and their supported arguments.

| Method | Permissions | Required Arguments |
| --- | --- | --- |
| [flickr.activity.userComments](https://www.flickr.com/services/api/flickr.activity.userComments.html) | `read` :eyes: |  |
| [flickr.activity.userPhotos](https://www.flickr.com/services/api/flickr.activity.userPhotos.html) | `read` :eyes: |  |
| [flickr.auth.checkToken](https://www.flickr.com/services/api/flickr.auth.checkToken.html) | `none`  | `auth_token` |
| [flickr.auth.getFrob](https://www.flickr.com/services/api/flickr.auth.getFrob.html) | `none`  |  |
| [flickr.auth.getFullToken](https://www.flickr.com/services/api/flickr.auth.getFullToken.html) | `none`  | `mini_token` |
| [flickr.auth.getToken](https://www.flickr.com/services/api/flickr.auth.getToken.html) | `none`  | `frob` |
| [flickr.auth.oauth.checkToken](https://www.flickr.com/services/api/flickr.auth.oauth.checkToken.html) | `none`  | `oauth_token` |
| [flickr.auth.oauth.getAccessToken](https://www.flickr.com/services/api/flickr.auth.oauth.getAccessToken.html) | `none`  |  |
| [flickr.blogs.getList](https://www.flickr.com/services/api/flickr.blogs.getList.html) | `read` :eyes: |  |
| [flickr.blogs.getServices](https://www.flickr.com/services/api/flickr.blogs.getServices.html) | `none`  |  |
| [flickr.blogs.postPhoto](https://www.flickr.com/services/api/flickr.blogs.postPhoto.html) | `write` :pencil2: | `photo_id`, `title`, `description` |
| [flickr.cameras.getBrandModels](https://www.flickr.com/services/api/flickr.cameras.getBrandModels.html) | `none`  | `brand` |
| [flickr.cameras.getBrands](https://www.flickr.com/services/api/flickr.cameras.getBrands.html) | `none`  |  |
| [flickr.collections.getInfo](https://www.flickr.com/services/api/flickr.collections.getInfo.html) | `read` :eyes: | `collection_id` |
| [flickr.collections.getTree](https://www.flickr.com/services/api/flickr.collections.getTree.html) | `none`  |  |
| [flickr.commons.getInstitutions](https://www.flickr.com/services/api/flickr.commons.getInstitutions.html) | `none`  |  |
| [flickr.contacts.getList](https://www.flickr.com/services/api/flickr.contacts.getList.html) | `read` :eyes: |  |
| [flickr.contacts.getListRecentlyUploaded](https://www.flickr.com/services/api/flickr.contacts.getListRecentlyUploaded.html) | `read` :eyes: |  |
| [flickr.contacts.getPublicList](https://www.flickr.com/services/api/flickr.contacts.getPublicList.html) | `none`  | `user_id` |
| [flickr.contacts.getTaggingSuggestions](https://www.flickr.com/services/api/flickr.contacts.getTaggingSuggestions.html) | `read` :eyes: |  |
| [flickr.favorites.add](https://www.flickr.com/services/api/flickr.favorites.add.html) | `write` :pencil2: | `photo_id` |
| [flickr.favorites.getContext](https://www.flickr.com/services/api/flickr.favorites.getContext.html) | `none`  | `photo_id`, `user_id` |
| [flickr.favorites.getList](https://www.flickr.com/services/api/flickr.favorites.getList.html) | `none`  |  |
| [flickr.favorites.getPublicList](https://www.flickr.com/services/api/flickr.favorites.getPublicList.html) | `none`  | `user_id` |
| [flickr.favorites.remove](https://www.flickr.com/services/api/flickr.favorites.remove.html) | `write` :pencil2: | `photo_id` |
| [flickr.galleries.addPhoto](https://www.flickr.com/services/api/flickr.galleries.addPhoto.html) | `write` :pencil2: | `gallery_id`, `photo_id` |
| [flickr.galleries.create](https://www.flickr.com/services/api/flickr.galleries.create.html) | `write` :pencil2: | `title`, `description` |
| [flickr.galleries.editMeta](https://www.flickr.com/services/api/flickr.galleries.editMeta.html) | `write` :pencil2: | `gallery_id`, `title` |
| [flickr.galleries.editPhoto](https://www.flickr.com/services/api/flickr.galleries.editPhoto.html) | `write` :pencil2: | `gallery_id`, `photo_id`, `comment` |
| [flickr.galleries.editPhotos](https://www.flickr.com/services/api/flickr.galleries.editPhotos.html) | `write` :pencil2: | `gallery_id`, `primary_photo_id`, `photo_ids` |
| [flickr.galleries.getInfo](https://www.flickr.com/services/api/flickr.galleries.getInfo.html) | `none`  | `gallery_id` |
| [flickr.galleries.getList](https://www.flickr.com/services/api/flickr.galleries.getList.html) | `none`  | `user_id` |
| [flickr.galleries.getListForPhoto](https://www.flickr.com/services/api/flickr.galleries.getListForPhoto.html) | `none`  | `photo_id` |
| [flickr.galleries.getPhotos](https://www.flickr.com/services/api/flickr.galleries.getPhotos.html) | `none`  | `gallery_id` |
| [flickr.groups.browse](https://www.flickr.com/services/api/flickr.groups.browse.html) | `read` :eyes: |  |
| [flickr.groups.getInfo](https://www.flickr.com/services/api/flickr.groups.getInfo.html) | `none`  | `group_id` |
| [flickr.groups.join](https://www.flickr.com/services/api/flickr.groups.join.html) | `write` :pencil2: | `group_id` |
| [flickr.groups.joinRequest](https://www.flickr.com/services/api/flickr.groups.joinRequest.html) | `write` :pencil2: | `group_id`, `message`, `accept_rules` |
| [flickr.groups.leave](https://www.flickr.com/services/api/flickr.groups.leave.html) | `delete` :boom: | `group_id` |
| [flickr.groups.search](https://www.flickr.com/services/api/flickr.groups.search.html) | `none`  | `text` |
| [flickr.groups.discuss.replies.add](https://www.flickr.com/services/api/flickr.groups.discuss.replies.add.html) | `write` :pencil2: | `group_id`, `topic_id`, `message` |
| [flickr.groups.discuss.replies.delete](https://www.flickr.com/services/api/flickr.groups.discuss.replies.delete.html) | `delete` :boom: | `group_id`, `topic_id`, `reply_id` |
| [flickr.groups.discuss.replies.edit](https://www.flickr.com/services/api/flickr.groups.discuss.replies.edit.html) | `write` :pencil2: | `group_id`, `topic_id`, `reply_id`, `message` |
| [flickr.groups.discuss.replies.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getInfo.html) | `none`  | `group_id`, `topic_id`, `reply_id` |
| [flickr.groups.discuss.replies.getList](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getList.html) | `none`  | `group_id`, `topic_id`, `per_page` |
| [flickr.groups.discuss.topics.add](https://www.flickr.com/services/api/flickr.groups.discuss.topics.add.html) | `write` :pencil2: | `group_id`, `subject`, `message` |
| [flickr.groups.discuss.topics.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getInfo.html) | `none`  | `group_id`, `topic_id` |
| [flickr.groups.discuss.topics.getList](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getList.html) | `none`  | `group_id` |
| [flickr.groups.members.getList](https://www.flickr.com/services/api/flickr.groups.members.getList.html) | `read` :eyes: | `group_id` |
| [flickr.groups.pools.add](https://www.flickr.com/services/api/flickr.groups.pools.add.html) | `write` :pencil2: | `photo_id`, `group_id` |
| [flickr.groups.pools.getContext](https://www.flickr.com/services/api/flickr.groups.pools.getContext.html) | `none`  | `photo_id`, `group_id` |
| [flickr.groups.pools.getGroups](https://www.flickr.com/services/api/flickr.groups.pools.getGroups.html) | `read` :eyes: |  |
| [flickr.groups.pools.getPhotos](https://www.flickr.com/services/api/flickr.groups.pools.getPhotos.html) | `none`  | `group_id` |
| [flickr.groups.pools.remove](https://www.flickr.com/services/api/flickr.groups.pools.remove.html) | `write` :pencil2: | `photo_id`, `group_id` |
| [flickr.interestingness.getList](https://www.flickr.com/services/api/flickr.interestingness.getList.html) | `none`  |  |
| [flickr.machinetags.getNamespaces](https://www.flickr.com/services/api/flickr.machinetags.getNamespaces.html) | `none`  |  |
| [flickr.machinetags.getPairs](https://www.flickr.com/services/api/flickr.machinetags.getPairs.html) | `none`  |  |
| [flickr.machinetags.getPredicates](https://www.flickr.com/services/api/flickr.machinetags.getPredicates.html) | `none`  |  |
| [flickr.machinetags.getRecentValues](https://www.flickr.com/services/api/flickr.machinetags.getRecentValues.html) | `none`  |  |
| [flickr.machinetags.getValues](https://www.flickr.com/services/api/flickr.machinetags.getValues.html) | `none`  | `namespace`, `predicate` |
| [flickr.panda.getList](https://www.flickr.com/services/api/flickr.panda.getList.html) | `none`  |  |
| [flickr.panda.getPhotos](https://www.flickr.com/services/api/flickr.panda.getPhotos.html) | `none`  | `panda_name` |
| [flickr.people.findByEmail](https://www.flickr.com/services/api/flickr.people.findByEmail.html) | `none`  | `find_email` |
| [flickr.people.findByUsername](https://www.flickr.com/services/api/flickr.people.findByUsername.html) | `none`  | `username` |
| [flickr.people.getGroups](https://www.flickr.com/services/api/flickr.people.getGroups.html) | `read` :eyes: | `user_id` |
| [flickr.people.getInfo](https://www.flickr.com/services/api/flickr.people.getInfo.html) | `none`  | `user_id` |
| [flickr.people.getLimits](https://www.flickr.com/services/api/flickr.people.getLimits.html) | `read` :eyes: |  |
| [flickr.people.getPhotos](https://www.flickr.com/services/api/flickr.people.getPhotos.html) | `none`  | `user_id` |
| [flickr.people.getPhotosOf](https://www.flickr.com/services/api/flickr.people.getPhotosOf.html) | `none`  | `user_id` |
| [flickr.people.getPublicGroups](https://www.flickr.com/services/api/flickr.people.getPublicGroups.html) | `none`  | `user_id` |
| [flickr.people.getPublicPhotos](https://www.flickr.com/services/api/flickr.people.getPublicPhotos.html) | `none`  | `user_id` |
| [flickr.people.getUploadStatus](https://www.flickr.com/services/api/flickr.people.getUploadStatus.html) | `read` :eyes: |  |
| [flickr.photos.addTags](https://www.flickr.com/services/api/flickr.photos.addTags.html) | `write` :pencil2: | `photo_id`, `tags` |
| [flickr.photos.delete](https://www.flickr.com/services/api/flickr.photos.delete.html) | `delete` :boom: | `photo_id` |
| [flickr.photos.getAllContexts](https://www.flickr.com/services/api/flickr.photos.getAllContexts.html) | `none`  | `photo_id` |
| [flickr.photos.getContactsPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPhotos.html) | `read` :eyes: |  |
| [flickr.photos.getContactsPublicPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPublicPhotos.html) | `none`  | `user_id` |
| [flickr.photos.getContext](https://www.flickr.com/services/api/flickr.photos.getContext.html) | `none`  | `photo_id` |
| [flickr.photos.getCounts](https://www.flickr.com/services/api/flickr.photos.getCounts.html) | `read` :eyes: |  |
| [flickr.photos.getExif](https://www.flickr.com/services/api/flickr.photos.getExif.html) | `none`  | `photo_id` |
| [flickr.photos.getFavorites](https://www.flickr.com/services/api/flickr.photos.getFavorites.html) | `none`  | `photo_id` |
| [flickr.photos.getInfo](https://www.flickr.com/services/api/flickr.photos.getInfo.html) | `none`  | `photo_id` |
| [flickr.photos.getNotInSet](https://www.flickr.com/services/api/flickr.photos.getNotInSet.html) | `read` :eyes: |  |
| [flickr.photos.getPerms](https://www.flickr.com/services/api/flickr.photos.getPerms.html) | `read` :eyes: | `photo_id` |
| [flickr.photos.getPopular](https://www.flickr.com/services/api/flickr.photos.getPopular.html) | `none`  |  |
| [flickr.photos.getRecent](https://www.flickr.com/services/api/flickr.photos.getRecent.html) | `none`  |  |
| [flickr.photos.getSizes](https://www.flickr.com/services/api/flickr.photos.getSizes.html) | `none`  | `photo_id` |
| [flickr.photos.getUntagged](https://www.flickr.com/services/api/flickr.photos.getUntagged.html) | `read` :eyes: |  |
| [flickr.photos.getWithGeoData](https://www.flickr.com/services/api/flickr.photos.getWithGeoData.html) | `read` :eyes: |  |
| [flickr.photos.getWithoutGeoData](https://www.flickr.com/services/api/flickr.photos.getWithoutGeoData.html) | `read` :eyes: |  |
| [flickr.photos.recentlyUpdated](https://www.flickr.com/services/api/flickr.photos.recentlyUpdated.html) | `read` :eyes: | `min_date` |
| [flickr.photos.removeTag](https://www.flickr.com/services/api/flickr.photos.removeTag.html) | `write` :pencil2: | `tag_id` |
| [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html) | `none`  |  |
| [flickr.photos.setContentType](https://www.flickr.com/services/api/flickr.photos.setContentType.html) | `write` :pencil2: | `photo_id`, `content_type` |
| [flickr.photos.setDates](https://www.flickr.com/services/api/flickr.photos.setDates.html) | `write` :pencil2: | `photo_id` |
| [flickr.photos.setMeta](https://www.flickr.com/services/api/flickr.photos.setMeta.html) | `write` :pencil2: | `photo_id` |
| [flickr.photos.setPerms](https://www.flickr.com/services/api/flickr.photos.setPerms.html) | `write` :pencil2: | `photo_id`, `is_public`, `is_friend`, `is_family` |
| [flickr.photos.setSafetyLevel](https://www.flickr.com/services/api/flickr.photos.setSafetyLevel.html) | `write` :pencil2: | `photo_id` |
| [flickr.photos.setTags](https://www.flickr.com/services/api/flickr.photos.setTags.html) | `write` :pencil2: | `photo_id`, `tags` |
| [flickr.photos.comments.addComment](https://www.flickr.com/services/api/flickr.photos.comments.addComment.html) | `write` :pencil2: | `photo_id`, `comment_text` |
| [flickr.photos.comments.deleteComment](https://www.flickr.com/services/api/flickr.photos.comments.deleteComment.html) | `write` :pencil2: | `comment_id` |
| [flickr.photos.comments.editComment](https://www.flickr.com/services/api/flickr.photos.comments.editComment.html) | `write` :pencil2: | `comment_id`, `comment_text` |
| [flickr.photos.comments.getList](https://www.flickr.com/services/api/flickr.photos.comments.getList.html) | `none`  | `photo_id` |
| [flickr.photos.comments.getRecentForContacts](https://www.flickr.com/services/api/flickr.photos.comments.getRecentForContacts.html) | `read` :eyes: |  |
| [flickr.photos.geo.batchCorrectLocation](https://www.flickr.com/services/api/flickr.photos.geo.batchCorrectLocation.html) | `write` :pencil2: | `lat`, `lon`, `accuracy` |
| [flickr.photos.geo.correctLocation](https://www.flickr.com/services/api/flickr.photos.geo.correctLocation.html) | `write` :pencil2: | `photo_id`, `foursquare_id` |
| [flickr.photos.geo.getLocation](https://www.flickr.com/services/api/flickr.photos.geo.getLocation.html) | `none`  | `photo_id` |
| [flickr.photos.geo.getPerms](https://www.flickr.com/services/api/flickr.photos.geo.getPerms.html) | `read` :eyes: | `photo_id` |
| [flickr.photos.geo.photosForLocation](https://www.flickr.com/services/api/flickr.photos.geo.photosForLocation.html) | `read` :eyes: | `lat`, `lon` |
| [flickr.photos.geo.removeLocation](https://www.flickr.com/services/api/flickr.photos.geo.removeLocation.html) | `write` :pencil2: | `photo_id` |
| [flickr.photos.geo.setContext](https://www.flickr.com/services/api/flickr.photos.geo.setContext.html) | `write` :pencil2: | `photo_id`, `context` |
| [flickr.photos.geo.setLocation](https://www.flickr.com/services/api/flickr.photos.geo.setLocation.html) | `write` :pencil2: | `photo_id`, `lat`, `lon` |
| [flickr.photos.geo.setPerms](https://www.flickr.com/services/api/flickr.photos.geo.setPerms.html) | `write` :pencil2: | `is_public`, `is_contact`, `is_friend`, `is_family`, `photo_id` |
| [flickr.photos.licenses.getInfo](https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html) | `none`  |  |
| [flickr.photos.licenses.setLicense](https://www.flickr.com/services/api/flickr.photos.licenses.setLicense.html) | `write` :pencil2: | `photo_id`, `license_id` |
| [flickr.photos.notes.add](https://www.flickr.com/services/api/flickr.photos.notes.add.html) | `write` :pencil2: | `photo_id`, `note_x`, `note_y`, `note_w`, `note_h`, `note_text` |
| [flickr.photos.notes.delete](https://www.flickr.com/services/api/flickr.photos.notes.delete.html) | `write` :pencil2: | `note_id` |
| [flickr.photos.notes.edit](https://www.flickr.com/services/api/flickr.photos.notes.edit.html) | `write` :pencil2: | `note_id`, `note_x`, `note_y`, `note_w`, `note_h`, `note_text` |
| [flickr.photos.people.add](https://www.flickr.com/services/api/flickr.photos.people.add.html) | `write` :pencil2: | `photo_id`, `user_id` |
| [flickr.photos.people.delete](https://www.flickr.com/services/api/flickr.photos.people.delete.html) | `write` :pencil2: | `photo_id`, `user_id` |
| [flickr.photos.people.deleteCoords](https://www.flickr.com/services/api/flickr.photos.people.deleteCoords.html) | `write` :pencil2: | `photo_id`, `user_id` |
| [flickr.photos.people.editCoords](https://www.flickr.com/services/api/flickr.photos.people.editCoords.html) | `write` :pencil2: | `photo_id`, `user_id`, `person_x`, `person_y`, `person_w`, `person_h` |
| [flickr.photos.people.getList](https://www.flickr.com/services/api/flickr.photos.people.getList.html) | `none`  | `photo_id` |
| [flickr.photos.suggestions.approveSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.approveSuggestion.html) | `write` :pencil2: | `suggestion_id` |
| [flickr.photos.suggestions.getList](https://www.flickr.com/services/api/flickr.photos.suggestions.getList.html) | `read` :eyes: |  |
| [flickr.photos.suggestions.rejectSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.rejectSuggestion.html) | `write` :pencil2: | `suggestion_id` |
| [flickr.photos.suggestions.removeSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.removeSuggestion.html) | `write` :pencil2: | `suggestion_id` |
| [flickr.photos.suggestions.suggestLocation](https://www.flickr.com/services/api/flickr.photos.suggestions.suggestLocation.html) | `write` :pencil2: | `photo_id`, `lat`, `lon` |
| [flickr.photos.transform.rotate](https://www.flickr.com/services/api/flickr.photos.transform.rotate.html) | `write` :pencil2: | `photo_id`, `degrees` |
| [flickr.photos.upload.checkTickets](https://www.flickr.com/services/api/flickr.photos.upload.checkTickets.html) | `none`  | `tickets` |
| [flickr.photosets.addPhoto](https://www.flickr.com/services/api/flickr.photosets.addPhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
| [flickr.photosets.create](https://www.flickr.com/services/api/flickr.photosets.create.html) | `write` :pencil2: | `title`, `primary_photo_id` |
| [flickr.photosets.delete](https://www.flickr.com/services/api/flickr.photosets.delete.html) | `write` :pencil2: | `photoset_id` |
| [flickr.photosets.editMeta](https://www.flickr.com/services/api/flickr.photosets.editMeta.html) | `write` :pencil2: | `photoset_id`, `title` |
| [flickr.photosets.editPhotos](https://www.flickr.com/services/api/flickr.photosets.editPhotos.html) | `write` :pencil2: | `photoset_id`, `primary_photo_id`, `photo_ids` |
| [flickr.photosets.getContext](https://www.flickr.com/services/api/flickr.photosets.getContext.html) | `none`  | `photo_id`, `photoset_id` |
| [flickr.photosets.getInfo](https://www.flickr.com/services/api/flickr.photosets.getInfo.html) | `none`  | `photoset_id`, `user_id` |
| [flickr.photosets.getList](https://www.flickr.com/services/api/flickr.photosets.getList.html) | `none`  |  |
| [flickr.photosets.getPhotos](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html) | `none`  | `photoset_id`, `user_id` |
| [flickr.photosets.orderSets](https://www.flickr.com/services/api/flickr.photosets.orderSets.html) | `write` :pencil2: | `photoset_ids` |
| [flickr.photosets.removePhoto](https://www.flickr.com/services/api/flickr.photosets.removePhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
| [flickr.photosets.removePhotos](https://www.flickr.com/services/api/flickr.photosets.removePhotos.html) | `write` :pencil2: | `photoset_id`, `photo_ids` |
| [flickr.photosets.reorderPhotos](https://www.flickr.com/services/api/flickr.photosets.reorderPhotos.html) | `write` :pencil2: | `photoset_id`, `photo_ids` |
| [flickr.photosets.setPrimaryPhoto](https://www.flickr.com/services/api/flickr.photosets.setPrimaryPhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
| [flickr.photosets.comments.addComment](https://www.flickr.com/services/api/flickr.photosets.comments.addComment.html) | `write` :pencil2: | `photoset_id`, `comment_text` |
| [flickr.photosets.comments.deleteComment](https://www.flickr.com/services/api/flickr.photosets.comments.deleteComment.html) | `write` :pencil2: | `comment_id` |
| [flickr.photosets.comments.editComment](https://www.flickr.com/services/api/flickr.photosets.comments.editComment.html) | `write` :pencil2: | `comment_id`, `comment_text` |
| [flickr.photosets.comments.getList](https://www.flickr.com/services/api/flickr.photosets.comments.getList.html) | `none`  | `photoset_id` |
| [flickr.places.find](https://www.flickr.com/services/api/flickr.places.find.html) | `none`  | `query` |
| [flickr.places.findByLatLon](https://www.flickr.com/services/api/flickr.places.findByLatLon.html) | `none`  | `lat`, `lon` |
| [flickr.places.getChildrenWithPhotosPublic](https://www.flickr.com/services/api/flickr.places.getChildrenWithPhotosPublic.html) | `none`  |  |
| [flickr.places.getInfo](https://www.flickr.com/services/api/flickr.places.getInfo.html) | `none`  |  |
| [flickr.places.getInfoByUrl](https://www.flickr.com/services/api/flickr.places.getInfoByUrl.html) | `none`  | `url` |
| [flickr.places.getPlaceTypes](https://www.flickr.com/services/api/flickr.places.getPlaceTypes.html) | `none`  |  |
| [flickr.places.getShapeHistory](https://www.flickr.com/services/api/flickr.places.getShapeHistory.html) | `none`  |  |
| [flickr.places.getTopPlacesList](https://www.flickr.com/services/api/flickr.places.getTopPlacesList.html) | `none`  | `place_type_id` |
| [flickr.places.placesForBoundingBox](https://www.flickr.com/services/api/flickr.places.placesForBoundingBox.html) | `none`  | `bbox` |
| [flickr.places.placesForContacts](https://www.flickr.com/services/api/flickr.places.placesForContacts.html) | `read` :eyes: |  |
| [flickr.places.placesForTags](https://www.flickr.com/services/api/flickr.places.placesForTags.html) | `none`  | `place_type_id` |
| [flickr.places.placesForUser](https://www.flickr.com/services/api/flickr.places.placesForUser.html) | `read` :eyes: |  |
| [flickr.places.resolvePlaceId](https://www.flickr.com/services/api/flickr.places.resolvePlaceId.html) | `none`  | `place_id` |
| [flickr.places.resolvePlaceURL](https://www.flickr.com/services/api/flickr.places.resolvePlaceURL.html) | `none`  | `url` |
| [flickr.places.tagsForPlace](https://www.flickr.com/services/api/flickr.places.tagsForPlace.html) | `none`  |  |
| [flickr.prefs.getContentType](https://www.flickr.com/services/api/flickr.prefs.getContentType.html) | `read` :eyes: |  |
| [flickr.prefs.getGeoPerms](https://www.flickr.com/services/api/flickr.prefs.getGeoPerms.html) | `read` :eyes: |  |
| [flickr.prefs.getHidden](https://www.flickr.com/services/api/flickr.prefs.getHidden.html) | `read` :eyes: |  |
| [flickr.prefs.getPrivacy](https://www.flickr.com/services/api/flickr.prefs.getPrivacy.html) | `read` :eyes: |  |
| [flickr.prefs.getSafetyLevel](https://www.flickr.com/services/api/flickr.prefs.getSafetyLevel.html) | `read` :eyes: |  |
| [flickr.profile.getProfile](https://www.flickr.com/services/api/flickr.profile.getProfile.html) | `none`  | `user_id` |
| [flickr.push.getSubscriptions](https://www.flickr.com/services/api/flickr.push.getSubscriptions.html) | `read` :eyes: |  |
| [flickr.push.getTopics](https://www.flickr.com/services/api/flickr.push.getTopics.html) | `none`  |  |
| [flickr.push.subscribe](https://www.flickr.com/services/api/flickr.push.subscribe.html) | `read` :eyes: | `topic`, `callback`, `verify` |
| [flickr.push.unsubscribe](https://www.flickr.com/services/api/flickr.push.unsubscribe.html) | `read` :eyes: | `topic`, `callback`, `verify` |
| [flickr.reflection.getMethodInfo](https://www.flickr.com/services/api/flickr.reflection.getMethodInfo.html) | `none`  | `method_name` |
| [flickr.reflection.getMethods](https://www.flickr.com/services/api/flickr.reflection.getMethods.html) | `none`  |  |
| [flickr.stats.getCSVFiles](https://www.flickr.com/services/api/flickr.stats.getCSVFiles.html) | `read` :eyes: |  |
| [flickr.stats.getCollectionDomains](https://www.flickr.com/services/api/flickr.stats.getCollectionDomains.html) | `read` :eyes: | `date` |
| [flickr.stats.getCollectionReferrers](https://www.flickr.com/services/api/flickr.stats.getCollectionReferrers.html) | `read` :eyes: | `date`, `domain` |
| [flickr.stats.getCollectionStats](https://www.flickr.com/services/api/flickr.stats.getCollectionStats.html) | `read` :eyes: | `date`, `collection_id` |
| [flickr.stats.getPhotoDomains](https://www.flickr.com/services/api/flickr.stats.getPhotoDomains.html) | `read` :eyes: | `date` |
| [flickr.stats.getPhotoReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotoReferrers.html) | `read` :eyes: | `date`, `domain` |
| [flickr.stats.getPhotoStats](https://www.flickr.com/services/api/flickr.stats.getPhotoStats.html) | `read` :eyes: | `date`, `photo_id` |
| [flickr.stats.getPhotosetDomains](https://www.flickr.com/services/api/flickr.stats.getPhotosetDomains.html) | `read` :eyes: | `date` |
| [flickr.stats.getPhotosetReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotosetReferrers.html) | `read` :eyes: | `date`, `domain` |
| [flickr.stats.getPhotosetStats](https://www.flickr.com/services/api/flickr.stats.getPhotosetStats.html) | `read` :eyes: | `date`, `photoset_id` |
| [flickr.stats.getPhotostreamDomains](https://www.flickr.com/services/api/flickr.stats.getPhotostreamDomains.html) | `read` :eyes: | `date` |
| [flickr.stats.getPhotostreamReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotostreamReferrers.html) | `read` :eyes: | `date`, `domain` |
| [flickr.stats.getPhotostreamStats](https://www.flickr.com/services/api/flickr.stats.getPhotostreamStats.html) | `read` :eyes: | `date` |
| [flickr.stats.getPopularPhotos](https://www.flickr.com/services/api/flickr.stats.getPopularPhotos.html) | `read` :eyes: |  |
| [flickr.stats.getTotalViews](https://www.flickr.com/services/api/flickr.stats.getTotalViews.html) | `read` :eyes: |  |
| [flickr.tags.getClusterPhotos](https://www.flickr.com/services/api/flickr.tags.getClusterPhotos.html) | `none`  | `tag`, `cluster_id` |
| [flickr.tags.getClusters](https://www.flickr.com/services/api/flickr.tags.getClusters.html) | `none`  | `tag` |
| [flickr.tags.getHotList](https://www.flickr.com/services/api/flickr.tags.getHotList.html) | `none`  |  |
| [flickr.tags.getListPhoto](https://www.flickr.com/services/api/flickr.tags.getListPhoto.html) | `none`  | `photo_id` |
| [flickr.tags.getListUser](https://www.flickr.com/services/api/flickr.tags.getListUser.html) | `none`  |  |
| [flickr.tags.getListUserPopular](https://www.flickr.com/services/api/flickr.tags.getListUserPopular.html) | `none`  |  |
| [flickr.tags.getListUserRaw](https://www.flickr.com/services/api/flickr.tags.getListUserRaw.html) | `none`  |  |
| [flickr.tags.getMostFrequentlyUsed](https://www.flickr.com/services/api/flickr.tags.getMostFrequentlyUsed.html) | `read` :eyes: |  |
| [flickr.tags.getRelated](https://www.flickr.com/services/api/flickr.tags.getRelated.html) | `none`  | `tag` |
| [flickr.test.echo](https://www.flickr.com/services/api/flickr.test.echo.html) | `none`  |  |
| [flickr.test.login](https://www.flickr.com/services/api/flickr.test.login.html) | `read` :eyes: |  |
| [flickr.test.null](https://www.flickr.com/services/api/flickr.test.null.html) | `read` :eyes: |  |
| [flickr.testimonials.addTestimonial](https://www.flickr.com/services/api/flickr.testimonials.addTestimonial.html) | `write` :pencil2: | `user_id`, `testimonial_text` |
| [flickr.testimonials.approveTestimonial](https://www.flickr.com/services/api/flickr.testimonials.approveTestimonial.html) | `write` :pencil2: | `testimonial_id` |
| [flickr.testimonials.deleteTestimonial](https://www.flickr.com/services/api/flickr.testimonials.deleteTestimonial.html) | `write` :pencil2: | `testimonial_id` |
| [flickr.testimonials.editTestimonial](https://www.flickr.com/services/api/flickr.testimonials.editTestimonial.html) | `write` :pencil2: | `user_id`, `testimonial_id`, `testimonial_text` |
| [flickr.testimonials.getAllTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAbout.html) | `read` :eyes: |  |
| [flickr.testimonials.getAllTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
| [flickr.testimonials.getAllTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsBy.html) | `read` :eyes: |  |
| [flickr.testimonials.getPendingTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAbout.html) | `read` :eyes: |  |
| [flickr.testimonials.getPendingTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
| [flickr.testimonials.getPendingTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsBy.html) | `read` :eyes: |  |
| [flickr.testimonials.getTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAbout.html) | `none`  | `user_id` |
| [flickr.testimonials.getTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
| [flickr.testimonials.getTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsBy.html) | `none`  | `user_id` |
| [flickr.urls.getGroup](https://www.flickr.com/services/api/flickr.urls.getGroup.html) | `none`  | `group_id` |
| [flickr.urls.getUserPhotos](https://www.flickr.com/services/api/flickr.urls.getUserPhotos.html) | `none`  |  |
| [flickr.urls.getUserProfile](https://www.flickr.com/services/api/flickr.urls.getUserProfile.html) | `none`  |  |
| [flickr.urls.lookupGallery](https://www.flickr.com/services/api/flickr.urls.lookupGallery.html) | `none`  | `url` |
| [flickr.urls.lookupGroup](https://www.flickr.com/services/api/flickr.urls.lookupGroup.html) | `none`  | `url` |
| [flickr.urls.lookupUser](https://www.flickr.com/services/api/flickr.urls.lookupUser.html) | `none`  | `url` |

**Kind**: global class  

* [Flickr](#Flickr)
    * [new Flickr(auth)](#new_Flickr_new)
    * [.OAuth](#Flickr.OAuth)
        * [new OAuth(consumerKey, consumerSecret)](#new_Flickr.OAuth_new)
        * _instance_
            * [.request(oauthCallback)](#Flickr.OAuth+request) ⇒ <code>Request</code>
            * [.authorizeUrl(requestToken, [perms])](#Flickr.OAuth+authorizeUrl) ⇒ <code>String</code>
            * [.verify(oauthToken, oauthVerifier, tokenSecret)](#Flickr.OAuth+verify) ⇒ <code>Request</code>
            * [.plugin(oauthToken, oauthTokenSecret)](#Flickr.OAuth+plugin) ⇒ <code>function</code>
        * _static_
            * [.createPlugin(consumerKey, consumerSecret, oauthToken, oauthTokenSecret)](#Flickr.OAuth.createPlugin) ⇒ <code>function</code>
    * [.Upload](#Flickr.Upload) ⇐ <code>Request</code>
        * [new Upload(auth, file, [args])](#new_Flickr.Upload_new)
    * [.Replace](#Flickr.Replace) ⇐ <code>Request</code>
        * [new Replace(auth, photoID, file, [args])](#new_Flickr.Replace_new)
    * [.Feeds](#Flickr.Feeds)
        * [new Feeds([args])](#new_Flickr.Feeds_new)
        * [.publicPhotos([args])](#Flickr.Feeds+publicPhotos) ⇒ <code>Request</code>
        * [.friendsPhotos(args)](#Flickr.Feeds+friendsPhotos) ⇒ <code>Request</code>
        * [.favePhotos(args)](#Flickr.Feeds+favePhotos) ⇒ <code>Request</code>
        * [.groupDiscussions(args)](#Flickr.Feeds+groupDiscussions) ⇒ <code>Request</code>
        * [.groupPool(args)](#Flickr.Feeds+groupPool) ⇒ <code>Request</code>
        * [.forum([args])](#Flickr.Feeds+forum) ⇒ <code>Request</code>
        * [.recentComments(args)](#Flickr.Feeds+recentComments) ⇒ <code>Request</code>

<a name="new_Flickr_new"></a>

### new Flickr(auth)
Creates a new Flickr REST API client.

You **must** pass a superagent plugin or your API key as the first
parameter. For methods that don't require authentication, you can simply
provide your API key. For methods that do require authentication,
use the [OAuth plugin](#Flickr.OAuth.createPlugin).


| Param | Type | Description |
| --- | --- | --- |
| auth | <code>function</code> \| <code>String</code> | An authentication plugin function or an API key |

**Example** *(Get info about a public photo with your API key)*  
```js

var flickr = new Flickr(process.env.FLICKR_API_KEY);

flickr.photos.getInfo({
  photo_id: 25825763 // sorry, @dokas
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
**Example** *(Searching for public photos with your API key)*  
```js

var flickr = new Flickr(process.env.FLICKR_API_KEY);

flickr.photos.search({
  text: 'doggo'
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
**Example** *(Authenticate as a user with the OAuth plugin)*  
```js

var flickr = new Flickr(Flickr.OAuth.createPlugin(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET,
  process.env.FLICKR_OAUTH_TOKEN,
  process.env.FLICKR_OAUTH_TOKEN_SECRET
));

flickr.test.login().then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.OAuth"></a>

### Flickr.OAuth
**Kind**: static class of [<code>Flickr</code>](#Flickr)  

* [.OAuth](#Flickr.OAuth)
    * [new OAuth(consumerKey, consumerSecret)](#new_Flickr.OAuth_new)
    * _instance_
        * [.request(oauthCallback)](#Flickr.OAuth+request) ⇒ <code>Request</code>
        * [.authorizeUrl(requestToken, [perms])](#Flickr.OAuth+authorizeUrl) ⇒ <code>String</code>
        * [.verify(oauthToken, oauthVerifier, tokenSecret)](#Flickr.OAuth+verify) ⇒ <code>Request</code>
        * [.plugin(oauthToken, oauthTokenSecret)](#Flickr.OAuth+plugin) ⇒ <code>function</code>
    * _static_
        * [.createPlugin(consumerKey, consumerSecret, oauthToken, oauthTokenSecret)](#Flickr.OAuth.createPlugin) ⇒ <code>function</code>

<a name="new_Flickr.OAuth_new"></a>

#### new OAuth(consumerKey, consumerSecret)
Creates a new OAuth service instance. You can use this service to
request and validate OAuth tokens, as well as generate an auth
plugin suitable for use with the REST and Upload services.

You need to [register an application](https://www.flickr.com/services/apps/create/)
to obtain your `consumerKey` and `consumerSecret`.

> **OAuth 1.0 requires your consumer secret to sign calls,
> and you should never expose secrets to the browser.**


| Param | Type | Description |
| --- | --- | --- |
| consumerKey | <code>String</code> | The application's API key |
| consumerSecret | <code>String</code> | The application's API secret |

**Example**  
```js
var oauth = new Flickr.OAuth(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET
);
```
<a name="Flickr.OAuth+request"></a>

#### oAuth.request(oauthCallback) ⇒ <code>Request</code>
Get a Request Token using the consumer key.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**

- https://github.com/visionmedia/superagent
- https://www.flickr.com/services/api/auth.oauth.html#request_token


| Param | Type | Description |
| --- | --- | --- |
| oauthCallback | <code>String</code> | Your application's OAuth callback URL |

**Example**  
```js
oauth.request('http://localhost:3000/oauth/callback').then(function (res) {
  console.log('yay!', res);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.OAuth+authorizeUrl"></a>

#### oAuth.authorizeUrl(requestToken, [perms]) ⇒ <code>String</code>
Returns the authorization url for `requestToken`. You may also pass
the `perms` your app is requesting as `read` (the default), `write`,
or `delete`. Your application should redirect the user here to ask
them to verify your request token.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**: https://www.flickr.com/services/api/auth.oauth.html#authorization  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| requestToken | <code>String</code> |  | The OAuth request token |
| [perms] | <code>String</code> | <code>read</code> | Permission level, may be "read", "write" or "delete" |

**Example**  
```js
var url = oauth.authorizeUrl(requestToken); // "https://www.flickr.com/services/oauth..."

res.setHeader("Location", url);
res.statusCode = 302;
res.end();
```
<a name="Flickr.OAuth+verify"></a>

#### oAuth.verify(oauthToken, oauthVerifier, tokenSecret) ⇒ <code>Request</code>
Verify an OAuth token using the verifier and token secret. If your user
has indeed verified your request token, you will receive an OAuth token
and secret back, as well as some very basic profile information. You
can now use this token and secret to make calls to the REST API.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**

- https://github.com/visionmedia/superagent
- https://www.flickr.com/services/api/auth.oauth.html#access_token


| Param | Type | Description |
| --- | --- | --- |
| oauthToken | <code>String</code> | The OAuth token to verify |
| oauthVerifier | <code>String</code> | The OAuth token verifier string you received from the callback |
| tokenSecret | <code>String</code> | The OAuth token secret |

**Example**  
```js
oauth.verify(oauthToken, oauthVerifier, tokenSecret).then(function (res) {
  console.log('oauth token:', res.body.oauth_token);
  console.log('oauth token secret:', res.body.oauth_token_secret);
}).catch(function (err) {
 console.log('bonk', err);
});
```
<a name="Flickr.OAuth+plugin"></a>

#### oAuth.plugin(oauthToken, oauthTokenSecret) ⇒ <code>function</code>
Returns an oauth plugin for this consumer key and secret.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  

| Param | Type | Description |
| --- | --- | --- |
| oauthToken | <code>String</code> | The OAuth token |
| oauthTokenSecret | <code>String</code> | The OAuth token secret |

**Example**  
```js
var flickr = new Flickr(oauth.plugin(
  oauthToken,
  oauthTokenSecret
));
```
<a name="Flickr.OAuth.createPlugin"></a>

#### OAuth.createPlugin(consumerKey, consumerSecret, oauthToken, oauthTokenSecret) ⇒ <code>function</code>
Returns an oauth plugin for this consumer key, consumer secret,
oauth token and oauth token secret,

**Kind**: static method of [<code>OAuth</code>](#Flickr.OAuth)  

| Param | Type | Description |
| --- | --- | --- |
| consumerKey | <code>String</code> | The application's API key |
| consumerSecret | <code>String</code> | The application's API secret |
| oauthToken | <code>String</code> | The OAuth token |
| oauthTokenSecret | <code>String</code> | The OAuth token secret |

**Example**  
```js
var flickr = new Flickr(Flickr.OAuth.createPlugin(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET,
  process.env.FLICKR_OAUTH_TOKEN,
  process.env.FLICKR_OAUTH_TOKEN_SECRET
));
```
<a name="Flickr.Upload"></a>

### Flickr.Upload ⇐ <code>Request</code>
**Kind**: static class of [<code>Flickr</code>](#Flickr)  
**Extends**: <code>Request</code>  
**See**: https://www.flickr.com/services/api/upload.api.html  
<a name="new_Flickr.Upload_new"></a>

#### new Upload(auth, file, [args])
Creates a new Upload service instance. Since the Upload API only
does one thing (upload files), an Upload instance is simply
a Request subclass.

The Upload endpoint requires authentication. You should pass a configured
instance of the [OAuth plugin](#Flickr.OAuth.createPlugin) to upload
photos on behalf of another user.


| Param | Type |
| --- | --- |
| auth | <code>function</code> | 
| file | <code>String</code> \| <code>fs.ReadStream</code> \| <code>Buffer</code> | 
| [args] | <code>Object</code> | 

**Example**  
```js
var upload = new Flickr.Upload(auth, 'upload.png', {
  title: 'Works on MY machine!'
});

upload.then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.Replace"></a>

### Flickr.Replace ⇐ <code>Request</code>
**Kind**: static class of [<code>Flickr</code>](#Flickr)  
**Extends**: <code>Request</code>  
**See**: https://www.flickr.com/services/api/replace.api.html  
<a name="new_Flickr.Replace_new"></a>

#### new Replace(auth, photoID, file, [args])
Creates a new Replace service instance. Since the Replace API only
does one thing (replace files), an Replace instance is simply
a Request subclass.

The Replace endpoint requires authentication. You should pass a configured
instance of the [OAuth plugin](#Flickr.OAuth.createPlugin) to replace
photos on behalf of another user.


| Param | Type | Description |
| --- | --- | --- |
| auth | <code>function</code> |  |
| photoID | <code>Number</code> \| <code>String</code> | The ID of the photo to replace |
| file | <code>String</code> \| <code>fs.ReadStream</code> \| <code>Buffer</code> |  |
| [args] | <code>Object</code> |  |

**Example**  
```js
var replace = new Flickr.Replace(auth, 41234567890, 'replace.png', {
  title: 'Now in pink!'
});

replace.then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.Feeds"></a>

### Flickr.Feeds
**Kind**: static class of [<code>Flickr</code>](#Flickr)  

* [.Feeds](#Flickr.Feeds)
    * [new Feeds([args])](#new_Flickr.Feeds_new)
    * [.publicPhotos([args])](#Flickr.Feeds+publicPhotos) ⇒ <code>Request</code>
    * [.friendsPhotos(args)](#Flickr.Feeds+friendsPhotos) ⇒ <code>Request</code>
    * [.favePhotos(args)](#Flickr.Feeds+favePhotos) ⇒ <code>Request</code>
    * [.groupDiscussions(args)](#Flickr.Feeds+groupDiscussions) ⇒ <code>Request</code>
    * [.groupPool(args)](#Flickr.Feeds+groupPool) ⇒ <code>Request</code>
    * [.forum([args])](#Flickr.Feeds+forum) ⇒ <code>Request</code>
    * [.recentComments(args)](#Flickr.Feeds+recentComments) ⇒ <code>Request</code>

<a name="new_Flickr.Feeds_new"></a>

#### new Feeds([args])
Creates a new Feeds service instance. You can use this instance
to explore and retrieve public Flickr API data.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [args] | <code>Object</code> |  | Arguments that will be passed along with every feed request |
| [args.format] | <code>String</code> | <code>json</code> | The feed response format |
| [args.lang] | <code>String</code> | <code>en-us</code> | The language to request for the feed |

**Example**  
```js
var feeds = new Flickr.Feeds();
```
<a name="Flickr.Feeds+publicPhotos"></a>

#### feeds.publicPhotos([args]) ⇒ <code>Request</code>
Returns a list of public content matching some criteria.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_public/  

| Param | Type |
| --- | --- |
| [args] | <code>Object</code> | 

<a name="Flickr.Feeds+friendsPhotos"></a>

#### feeds.friendsPhotos(args) ⇒ <code>Request</code>
Returns a list of public content from the contacts, friends & family of a given person.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_friends/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.user_id | <code>Number</code> \| <code>String</code> | The user ID of the user to fetch friends' photos and videos for. |

<a name="Flickr.Feeds+favePhotos"></a>

#### feeds.favePhotos(args) ⇒ <code>Request</code>
Returns a list of public favorites for a given user.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_faves/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> \| <code>String</code> | A single user ID. This specifies a user to fetch for. |

<a name="Flickr.Feeds+groupDiscussions"></a>

#### feeds.groupDiscussions(args) ⇒ <code>Request</code>
Returns a list of recent discussions in a given group.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/groups_discuss/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> | The ID of the group to fetch discussions for. |

<a name="Flickr.Feeds+groupPool"></a>

#### feeds.groupPool(args) ⇒ <code>Request</code>
Returns a list of things recently added to the pool of a given group.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/groups_pool/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> | The ID of the group to fetch for. |

<a name="Flickr.Feeds+forum"></a>

#### feeds.forum([args]) ⇒ <code>Request</code>
Returns a list of recent topics from the forum.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/forums/  

| Param | Type |
| --- | --- |
| [args] | <code>Object</code> | 

<a name="Flickr.Feeds+recentComments"></a>

#### feeds.recentComments(args) ⇒ <code>Request</code>
Returns a list of recent comments that have been commented on by a given person.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_comments/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.user_id | <code>Number</code> \| <code>String</code> | The user ID to fetch recent comments for. |



## License

Code licensed under the MIT license. See LICENSE file for terms.

[api keys]: https://www.flickr.com/services/api/misc.api_keys.html
[services/api]: https://www.flickr.com/services/api/
[services/oauth]: https://www.flickr.com/services/api/auth.oauth.html
[services/feeds]: https://www.flickr.com/services/feeds/
[services/upload]: https://www.flickr.com/services/api/upload.api.html
[services/replace]: https://www.flickr.com/services/api/replace.api.html
[flickr.photos.getInfo]: https://www.flickr.com/services/api/flickr.photos.getInfo.html
[flickr.photos.search]: https://www.flickr.com/services/api/flickr.photos.search.html
[superagent]: https://github.com/visionmedia/superagent/
[browserify]: http://browserify.org/
[webpack]: https://webpack.js.org/
[rollup]: https://rollupjs.org/
