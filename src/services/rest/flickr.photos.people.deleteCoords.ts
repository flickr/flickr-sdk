/**
 * This file was auto-generated on 2023-10-24T15:44:49.829Z
 * flickr.photos.people.deleteCoords
 * Remove the bounding box from a person in a photo
 * Permissions required: write
 */
export type FlickrPhotosPeopleDeleteCoordsParams = {
  /**
   * The id of the photo to edit a person in.
   */
  photo_id: string
  /**
   * The NSID of the person whose bounding box you want to remove.
   */
  user_id: string
}
