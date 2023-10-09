/**
 * flickr.photos.comments.addComment
 * Add comment to a photo as the currently authenticated user.
 */
export interface FlickrPhotosCommentsAddCommentParams {
  /**
   * The id of the photo to add a comment to.
   */
  photo_id: string
  /**
   * Text of the comment
   */
  comment_text: string
}
