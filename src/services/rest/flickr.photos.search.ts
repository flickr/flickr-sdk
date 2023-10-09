/**
 * flickr.photos.search
 * Return a list of photos matching some criteria. Only photos visible to the calling user will be returned. To return private or semi-private photos, the caller must be authenticated with 'read' permissions, and have permission to view the photos. Unauthenticated calls will only return public photos.
 */
export interface FlickrPhotosSearchParams {
  /**
   * The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of "me" will search against the calling user's photos for authenticated calls.
   */
  user_id?: string
  /**
   * A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.
   */
  tags?: string
  /**
   * Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
   */
  tag_mode?: string
  /**
   * A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.
   */
  text?: string
  /**
   * Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
   */
  min_upload_date?: string
  /**
   * Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
   */
  max_upload_date?: string
  /**
   * Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
   */
  min_taken_date?: string
  /**
   * Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
   */
  max_taken_date?: string
  /**
   * The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.
   */
  license?: string
  /**
   * The order in which to sort returned photos. Defaults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are: date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, interestingness-asc, and relevance.
   */
  sort?: string
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
 * A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.
<br /><br />
The 4 values represent the bottom-left corner of the box and the top-right corner, minimum_longitude, minimum_latitude, maximum_longitude, maximum_latitude.
<br /><br />
Longitude has a range of -180 to 180 , latitude of -90 to 90. Defaults to -180, -90, 180, 90 if not specified.
<br /><br />
Unlike standard photo queries, geo (or bounding box) queries will only return 250 results per page.
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &#8212; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  bbox?: string
  /**
 * Recorded accuracy level of the location information.  Current range is 1-16 :

<ul>
<li>World level is 1</li>
<li>Country is ~3</li>
<li>Region is ~6</li>
<li>City is ~11</li>
<li>Street is ~16</li>
</ul>

Defaults to maximum value if not specified.
 */
  accuracy?: string
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
 * Comma-separated list of content types to return. If used in conjunction with video_content_types, this is applied to only photos. If video_content_types is not specified, this filter will apply to all media types
<ul>
<li>0 for photos.</li>
<li>1 for screenshots.</li>
<li>2 for 'other'.</li>
<li>3 for virtual photos.</li>
</ul>
 */
  content_types?: string
  /**
 * Comma-separated list of video content types to return. If specified without content_types, ensure that the media argument is not set to 'photos' or no results will be returned
<ul>
<li>0 for videos.</li>
<li>1 for Screencasts.</li>
<li>2 for Animation/CGI.</li>
<li>3 for Machinima.</li>
</ul>
 */
  video_content_types?: string
  /**
 * Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties :

<ul>
  <li>Find photos using the 'dc' namespace :    <code>"machine_tags" => "dc:"</code></li>

  <li> Find photos with a title in the 'dc' namespace : <code>"machine_tags" => "dc:title="</code></li>

  <li>Find photos titled "mr. camera" in the 'dc' namespace : <code>"machine_tags" => "dc:title=\"mr. camera\"</code></li>

  <li>Find photos whose value is "mr. camera" : <code>"machine_tags" => "*:*=\"mr. camera\""</code></li>

  <li>Find photos that have a title, in any namespace : <code>"machine_tags" => "*:title="</code></li>

  <li>Find photos that have a title, in any namespace, whose value is "mr. camera" : <code>"machine_tags" => "*:title=\"mr. camera\""</code></li>

  <li>Find photos, in the 'dc' namespace whose value is "mr. camera" : <code>"machine_tags" => "dc:*=\"mr. camera\""</code></li>

 </ul>

Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited
to (8).
 */
  machine_tags?: string
  /**
   * Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
   */
  machine_tag_mode?: string
  /**
   * The id of a group who's pool to search.  If specified, only matching photos posted to the group's pool will be returned.
   */
  group_id?: string
  /**
   * Search your contacts. Either 'all' or 'ff' for just friends and family.
   */
  contacts?: string
  /**
 * A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  woe_id?: string
  /**
 * A Flickr place id.  (not used if bbox argument is present).
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  place_id?: string
  /**
   * Filter results by media type. Possible values are <code>all</code> (default), <code>photos</code> or <code>videos</code>
   */
  media?: string
  /**
 * Any photo that has been geotagged, or if the value is "0" any photo that has <i>not</i> been geotagged.
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  has_geo?: string
  /**
 * Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". <br /><br />
The current list of context IDs is :<br /><br/>
<ul>
<li><strong>0</strong>, not defined.</li>
<li><strong>1</strong>, indoors.</li>
<li><strong>2</strong>, outdoors.</li>
</ul>
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  geo_context?: string
  /**
 * A valid latitude, in decimal format, for doing radial geo queries.
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  lat?: string
  /**
 * A valid longitude, in decimal format, for doing radial geo queries.
<br /><br />
Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component.
<br /><br />
A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters &mdash; If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
 */
  lon?: string
  /**
   * A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).
   */
  radius?: string
  /**
   * The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".
   */
  radius_units?: string
  /**
   * Limit the scope of the search to only photos that are part of the <a href="http://flickr.com/commons">Flickr Commons project</a>. Default is false.
   */
  is_commons?: string
  /**
   * Limit the scope of the search to only photos that are in a <a href="http://www.flickr.com/help/galleries/">gallery</a>?  Default is false, search all photos.
   */
  in_gallery?: string
  /**
   * Limit the scope of the search to only photos that are for sale on Getty. Default is false.
   */
  is_getty?: string
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
