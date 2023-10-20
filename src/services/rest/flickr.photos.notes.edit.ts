/**
 * This file was auto-generated on 2023-10-20T16:36:46.742Z
 * flickr.photos.notes.edit
 * Edit a note on a photo. Coordinates and sizes are in pixels, based on the 500px image size shown on individual photo pages.

 */
export interface FlickrPhotosNotesEditParams {
  /**
   * The id of the note to edit
   */
  note_id: string
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
