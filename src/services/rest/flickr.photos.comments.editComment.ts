/**
 * This file was auto-generated on 2023-10-24T15:44:49.782Z
 * flickr.photos.comments.editComment
 * Edit the text of a comment as the currently authenticated user.
 * Permissions required: write
 */
export type FlickrPhotosCommentsEditCommentParams = {
  /**
   * The id of the comment to edit.
   */
  comment_id: string
  /**
   * Update the comment to this text.
   */
  comment_text: string
}
