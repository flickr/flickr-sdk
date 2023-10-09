/**
 * flickr.tags.getRelated
 * Returns a list of tags 'related' to the given tag, based on clustered usage analysis.
 */
export interface FlickrTagsGetRelatedParams {
  /**
   * The tag to fetch related tags for.
   */
  tag: string
}
