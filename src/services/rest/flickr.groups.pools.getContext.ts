/**
 * This file was auto-generated on 2023-10-24T15:44:49.740Z
 * flickr.groups.pools.getContext
 * Returns next and previous photos for a photo in a group pool.
 * Permissions required: none
 */
export type FlickrGroupsPoolsGetContextParams = {
  /**
   * The id of the photo to fetch the context for.
   */
  photo_id: string
  /**
   * The nsid of the group who's pool to fetch the photo's context for.
   */
  group_id: string
}
