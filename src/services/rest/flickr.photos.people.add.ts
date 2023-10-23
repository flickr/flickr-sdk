/**
 * This file was auto-generated on 2023-10-24T15:44:49.827Z
 * flickr.photos.people.add
 * Add a person to a photo. Coordinates and sizes of boxes are optional; they are measured in pixels, based on the 500px image size shown on individual photo pages.
 * Permissions required: write
 */
export type FlickrPhotosPeopleAddParams = {
  /**
   * The id of the photo to add a person to.
   */
  photo_id: string
  /**
   * The NSID of the user to add to the photo.
   */
  user_id: string
  /**
   * The left-most pixel co-ordinate of the box around the person.
   */
  person_x?: string
  /**
   * The top-most pixel co-ordinate of the box around the person.
   */
  person_y?: string
  /**
   * The width (in pixels) of the box around the person.
   */
  person_w?: string
  /**
   * The height (in pixels) of the box around the person.
   */
  person_h?: string
}
