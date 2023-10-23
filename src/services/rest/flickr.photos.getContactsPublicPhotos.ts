/**
 * This file was auto-generated on 2023-10-24T15:44:49.804Z
 * flickr.photos.getContactsPublicPhotos
 * Fetch a list of recent public photos from a users' contacts.
 * Permissions required: none
 */
export type FlickrPhotosGetContactsPublicPhotosParams = {
  /**
   * The NSID of the user to fetch photos for.
   */
  user_id: string
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
   * Set to 1 to include photos from the user specified by user_id.
   */
  include_self?: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: license, date_upload, date_taken, owner_name, icon_server, original_format, last_update.
   */
  extras?: string
}
