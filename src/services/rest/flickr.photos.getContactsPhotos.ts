/**
 * flickr.photos.getContactsPhotos
 * Fetch a list of recent photos from the calling users' contacts.
 */
export interface FlickrPhotosGetContactsPhotosParams {
  /**
   * Number of photos to return. Defaults to 10, maximum 50. This is only used if <code>single_photo</code> is not passed.
   */
  count?: string
  /**
   * set as 1 to only show photos from friends and family (excluding regular contacts).
   */
  just_friends?: string
  /**
   * Only fetch one photo (the latest) per contact, instead of all photos in chronological order.
   */
  single_photo?: string
  /**
   * Set to 1 to include photos from the calling user.
   */
  include_self?: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields include: license, date_upload, date_taken, owner_name, icon_server, original_format, last_update. For more information see extras under <a href="/services/api/flickr.photos.search.html">flickr.photos.search</a>.
   */
  extras?: string
}
