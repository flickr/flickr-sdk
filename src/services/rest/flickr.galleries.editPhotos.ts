/**
 * flickr.galleries.editPhotos
 * Modify the photos in a gallery. Use this method to add, remove and re-order photos.
 */
export interface FlickrGalleriesEditPhotosParams {
  /**
   * The id of the gallery to modify. The gallery must belong to the calling user.
   */
  gallery_id: string
  /**
   * The id of the photo to use as the 'primary' photo for the gallery. This id must also be passed along in photo_ids list argument.
   */
  primary_photo_id: string
  /**
   * A comma-delimited list of photo ids to include in the gallery. They will appear in the set in the order sent. This list must contain the primary photo id. This list of photos replaces the existing list.
   */
  photo_ids: string
}
