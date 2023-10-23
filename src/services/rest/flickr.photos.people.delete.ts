/**
 * This file was auto-generated on 2023-10-24T15:44:49.828Z
 * flickr.photos.people.delete
 * Remove a person from a photo.
 * Permissions required: write
 */
export type FlickrPhotosPeopleDeleteParams = {
  /**
   * The id of the photo to remove a person from.
   */
  photo_id: string
  /**
   * The NSID of the person to remove from the photo.
   */
  user_id: string
}
