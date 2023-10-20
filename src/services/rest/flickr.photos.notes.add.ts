/**
 * This file was auto-generated on 2023-10-20T16:36:46.741Z
 * flickr.photos.notes.add
 * Add a note to a photo. Coordinates and sizes are in pixels, based on the 500px image size shown on individual photo pages.
 */
export interface FlickrPhotosNotesAddParams {
  /**
   * The id of the photo to add a note to
   */
  photo_id: string
  /**
   * The left coordinate of the note
   */
  note_x: string
  /**
   * The top coordinate of the note
   */
  note_y: string
  /**
   * The width of the note
   */
  note_w: string
  /**
   * The height of the note
   */
  note_h: string
  /**
   * The description of the note
   */
  note_text: string
}
