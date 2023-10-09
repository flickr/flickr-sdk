/**
 * flickr.collections.getInfo
 * Returns information for a single collection.  Currently can only be called by the collection owner, this may change.		
				Note that the response values of `iconlarge` and `iconsmall` are defunct and will now return empty mosaic grids. For more information on how to 
				use the new style of collection mosaics, go <a href="https://www.flickr.com/services/api/misc.collections.html">here</a>.
 */
export interface FlickrCollectionsGetInfoParams {
  /**
   * The ID of the collection to fetch information for.
   */
  collection_id: string
}
