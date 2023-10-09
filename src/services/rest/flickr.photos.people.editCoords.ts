/**
 * flickr.photos.people.editCoords
 * Edit the bounding box of an existing person on a photo.
 */
export interface FlickrPhotosPeopleEditCoordsParams {
  /**
   * The id of the photo to edit a person in.
   */
  photo_id: string
  /**
   * The NSID of the person to edit in a photo.
   */
  user_id: string
  /**
   * The left-most pixel co-ordinate of the box around the person.
   */
  person_x: string
  /**
   * The top-most pixel co-ordinate of the box around the person.
   */
  person_y: string
  /**
   * The width (in pixels) of the box around the person.
   */
  person_w: string
  /**
   * The height (in pixels) of the box around the person.
   */
  person_h: string
}
