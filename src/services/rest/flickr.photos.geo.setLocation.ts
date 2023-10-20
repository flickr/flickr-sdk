/**
 * This file was auto-generated on 2023-10-20T16:36:46.720Z
 * flickr.photos.geo.setLocation
 * Sets the geo data (latitude and longitude and, optionally, the accuracy level) for a photo.

Before users may assign location data to a photo they must define who, by default, may view that information. Users can edit this preference at <a href="http://www.flickr.com/account/geo/privacy/">http://www.flickr.com/account/geo/privacy/</a>. If a user has not set this preference, the API method will return an error.
 */
export interface FlickrPhotosGeoSetLocationParams {
  /**
   * The id of the photo to set location data for.
   */
  photo_id: string
  /**
   * The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
   */
  lat: string
  /**
   * The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
   */
  lon: string
  /**
   * Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
   */
  accuracy?: string
  /**
 * Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors". <br /><br />
The current list of context IDs is :<br /><br/>
<ul>
<li><strong>0</strong>, not defined.</li>
<li><strong>1</strong>, indoors.</li>
<li><strong>2</strong>, outdoors.</li>
</ul><br />
The default context for geotagged photos is 0, or "not defined"

 */
  context?: string
}
