/**
 * This file was auto-generated on 2023-10-24T15:44:49.824Z
 * flickr.photos.notes.add
 * Add a note to a photo. Coordinates and sizes are in pixels, based on the 500px image size shown on individual photo pages.
 * Permissions required: write
 */
export type FlickrPhotosNotesAddParams = {
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
