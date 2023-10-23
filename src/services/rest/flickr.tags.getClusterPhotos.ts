/**
 * This file was auto-generated on 2023-10-24T15:44:49.908Z
 * flickr.tags.getClusterPhotos
 * Returns the first 24 photos for a given tag cluster
 * Permissions required: none
 */
export type FlickrTagsGetClusterPhotosParams = {
  /**
   * The tag that this cluster belongs to.
   */
  tag: string
  /**
   * The top three tags for the cluster, separated by dashes (just like the url).
   */
  cluster_id: string
}
