/**
 * This file was auto-generated on 2023-10-24T15:44:49.688Z
 * flickr.collections.getInfo
 * Returns information for a single collection.  Currently can only be called by the collection owner, this may change.		
				Note that the response values of `iconlarge` and `iconsmall` are defunct and will now return empty mosaic grids. For more information on how to 
				use the new style of collection mosaics, go <a href="https://www.flickr.com/services/api/misc.collections.html">here</a>.
 * Permissions required: read
 */
export type FlickrCollectionsGetInfoParams = {
  /**
   * The ID of the collection to fetch information for.
   */
  collection_id: string
}
