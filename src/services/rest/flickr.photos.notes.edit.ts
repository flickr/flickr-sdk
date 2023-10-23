/**
 * This file was auto-generated on 2023-10-24T15:44:49.826Z
 * flickr.photos.notes.edit
 * Edit a note on a photo. Coordinates and sizes are in pixels, based on the 500px image size shown on individual photo pages.

 * Permissions required: write
 */
export type FlickrPhotosNotesEditParams = {
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
