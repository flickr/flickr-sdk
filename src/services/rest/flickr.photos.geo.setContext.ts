/**
 * flickr.photos.geo.setContext
 * Indicate the state of a photo's geotagginess beyond latitude and longitude.<br /><br />
Note : photos passed to this method must already be geotagged (using the <q>flickr.photos.geo.setLocation</q> method).
 */
export interface FlickrPhotosGeoSetContextParams {
  /**
   * The id of the photo to set context data for.
   */
  photo_id: string
  /**
 * Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors". <br /><br />
The current list of context IDs is :<br /><br/>
<ul>
<li><strong>0</strong>, not defined.</li>
<li><strong>1</strong>, indoors.</li>
<li><strong>2</strong>, outdoors.</li>
</ul>
 */
  context: string
}
