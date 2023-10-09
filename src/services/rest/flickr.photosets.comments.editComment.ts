/**
 * flickr.photosets.comments.editComment
 * Edit the text of a comment as the currently authenticated user.
 */
export interface FlickrPhotosetsCommentsEditCommentParams {
  /**
   * The id of the comment to edit.
   */
  comment_id: string
  /**
   * Update the comment to this text.
   */
  comment_text: string
}
