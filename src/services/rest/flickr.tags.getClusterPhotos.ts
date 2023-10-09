/**
 * flickr.tags.getClusterPhotos
 * Returns the first 24 photos for a given tag cluster
 */
export interface FlickrTagsGetClusterPhotosParams {
  /**
   * The tag that this cluster belongs to.
   */
  tag: string
  /**
   * The top three tags for the cluster, separated by dashes (just like the url).
   */
  cluster_id: string
}
