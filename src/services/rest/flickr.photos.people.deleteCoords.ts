/**
 * flickr.photos.people.deleteCoords
 * Remove the bounding box from a person in a photo
 */
export interface FlickrPhotosPeopleDeleteCoordsParams {
  /**
   * The id of the photo to edit a person in.
   */
  photo_id: string
  /**
   * The NSID of the person whose bounding box you want to remove.
   */
  user_id: string
}
