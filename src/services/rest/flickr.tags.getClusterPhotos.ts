/**
 * This file was auto-generated on 2023-10-20T16:36:46.800Z
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
