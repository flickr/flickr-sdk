/**
 * flickr.photos.people.delete
 * Remove a person from a photo.
 */
export interface FlickrPhotosPeopleDeleteParams {
  /**
   * The id of the photo to remove a person from.
   */
  photo_id: string
  /**
   * The NSID of the person to remove from the photo.
   */
  user_id: string
}
