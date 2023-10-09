/**
 * flickr.people.getPhotos
 * Return photos from the given user's photostream. Only photos visible to the calling user will be returned. This method must be authenticated; to return public photos for a user, use <a href="/services/api/flickr.people.getPublicPhotos.html">flickr.people.getPublicPhotos</a>.
 */
export interface FlickrPeopleGetPhotosParams {
  /**
   * The NSID of the user who's photos to return. A value of "me" will return the calling user's photos.
   */
  user_id: string
  /**
 * Safe search setting:

<ul>
<li>1 for safe.</li>
<li>2 for moderate.</li>
<li>3 for restricted.</li>
</ul>

(Please note: Un-authed calls can only see Safe content.)
 */
  safe_search?: string
  /**
   * Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.
   */
  min_upload_date?: string
  /**
   * Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
   */
  max_upload_date?: string
  /**
   * Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime.
   */
  min_taken_date?: string
  /**
   * Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
   */
  max_taken_date?: string
  /**
 * Comma-separated list of content types to return:
<ul>
<li>0 for photos.</li>
<li>1 for screenshots.</li>
<li>2 for 'other'.</li>
<li>3 for virtual photos.</li>
</ul>
 */
  content_types?: string
  /**
 * Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:
<ul>
<li>1 public photos</li>
<li>2 private photos visible to friends</li>
<li>3 private photos visible to family</li>
<li>4 private photos visible to friends & family</li>
<li>5 completely private photos</li>
</ul>
 */
  privacy_filter?: string
  /**
 * DEPRECATED. Use content_types instead.

Content Type setting:
<ul>
<li>1 for photos only.</li>
<li>2 for screenshots only.</li>
<li>3 for 'other' only.</li>
<li>4 for photos and screenshots.</li>
<li>5 for screenshots and 'other'.</li>
<li>6 for photos and 'other'.</li>
<li>7 for photos, screenshots, and 'other' (all).</li>
</ul>
 */
  content_type?: string
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
