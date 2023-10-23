/**
 * This file was auto-generated on 2023-10-24T15:44:49.855Z
 * flickr.photosets.editPhotos
 * Modify the photos in a photoset. Use this method to add, remove and re-order photos.
 * Permissions required: write
 */
export type FlickrPhotosetsEditPhotosParams = {
  /**
   * The id of the photoset to modify. The photoset must belong to the calling user.
   */
  photoset_id: string
  /**
   * The id of the photo to use as the 'primary' photo for the set. This id must also be passed along in photo_ids list argument.
   */
  primary_photo_id: string
  /**
   * A comma-delimited list of photo ids to include in the set. They will appear in the set in the order sent. This list <b>must</b> contain the primary photo id. All photos must belong to the owner of the set. This list of photos replaces the existing list. Call flickr.photosets.addPhoto to append a photo to a set.
   */
  photo_ids: string
}
