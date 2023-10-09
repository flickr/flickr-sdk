/**
 * flickr.photosets.comments.addComment
 * Add a comment to a photoset.
 */
export interface FlickrPhotosetsCommentsAddCommentParams {
  /**
   * The id of the photoset to add a comment to.
   */
  photoset_id: string
  /**
   * Text of the comment
   */
  comment_text: string
}
