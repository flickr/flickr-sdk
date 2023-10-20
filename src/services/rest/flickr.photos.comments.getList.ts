/**
 * This file was auto-generated on 2023-10-20T16:36:46.710Z
 * flickr.photos.comments.getList
 * Returns the comments for a photo
 */
export interface FlickrPhotosCommentsGetListParams {
  /**
   * The id of the photo to fetch comments for.
   */
  photo_id: string
  /**
   * Minimum date that a a comment was added. The date should be in the form of a unix timestamp.
   */
  min_comment_date?: string
  /**
   * Maximum date that a comment was added. The date should be in the form of a unix timestamp.
   */
  max_comment_date?: string
}
