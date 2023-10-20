/**
 * This file was auto-generated on 2023-10-20T16:36:46.657Z
 * flickr.collections.getTree
 * Returns a tree (or sub tree) of collections belonging to a given user.
				Note that the response values of `iconlarge` and `iconsmall` are defunct and will now return empty mosaic grids. For more information on how to 
				use the new style of collection mosaics, go <a href="https://www.flickr.com/services/api/misc.collections.html">here</a>.
 */
export interface FlickrCollectionsGetTreeParams {
  /**
   * The ID of the collection to fetch a tree for, or zero to fetch the root collection. Defaults to zero.
   */
  collection_id?: string
  /**
   * The ID of the account to fetch the collection tree for. Defaults to the calling user.
   */
  user_id?: string
}
