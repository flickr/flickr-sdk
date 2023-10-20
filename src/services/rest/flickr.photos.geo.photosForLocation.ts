/**
 * This file was auto-generated on 2023-10-20T16:36:46.715Z
 * flickr.photos.geo.photosForLocation
 * Return a list of photos for the calling user at a specific latitude, longitude and accuracy
 */
export interface FlickrPhotosGeoPhotosForLocationParams {
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
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: <code>description</code>, <code>license</code>, <code>date_upload</code>, <code>date_taken</code>, <code>owner_name</code>, <code>icon_server</code>, <code>original_format</code>, <code>last_update</code>, <code>geo</code>, <code>tags</code>, <code>machine_tags</code>, <code>o_dims</code>, <code>views</code>, <code>media</code>, <code>path_alias</code>, <code>url_sq</code>, <code>url_t</code>, <code>url_s</code>, <code>url_q</code>, <code>url_m</code>, <code>url_n</code>, <code>url_z</code>, <code>url_c</code>, <code>url_l</code>, <code>url_o</code>
   */
  extras?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
