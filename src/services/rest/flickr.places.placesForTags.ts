/**
 * flickr.places.placesForTags
 * Return a list of the top 100 unique places clustered by a given placetype for set of tags or machine tags.
 */
export interface FlickrPlacesPlacesForTagsParams {
  /**
 * The numeric ID for a specific place type to cluster photos by. <br /><br />

Valid place type IDs are :

<ul>
<li><strong>22</strong>: neighbourhood</li>
<li><strong>7</strong>: locality</li>
<li><strong>8</strong>: region</li>
<li><strong>12</strong>: country</li>
<li><strong>29</strong>: continent</li>
</ul>
 */
  place_type_id: string
  /**
 * A Where on Earth identifier to use to filter photo clusters. For example all the photos clustered by <strong>locality</strong> in the United States (WOE ID <strong>23424977</strong>).
<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
 */
  woe_id?: string
  /**
 * A Flickr Places identifier to use to filter photo clusters. For example all the photos clustered by <strong>locality</strong> in the United States (Place ID <strong>4KO02SibApitvSBieQ</strong>).
<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
 */
  place_id?: string
  /**
 * The minimum number of photos that a place type must have to be included. If the number of photos is lowered then the parent place type for that place will be used.<br /><br />

For example if you only have <strong>3</strong> photos taken in the locality of Montreal</strong> (WOE ID 3534) but your threshold is set to <strong>5</strong> then those photos will be "rolled up" and included instead with a place record for the region of Quebec (WOE ID 2344924).
 */
  threshold?: string
  /**
 * A comma-delimited list of tags. Photos with one or more of the tags listed will be returned.
<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid tag or machine_tag</span>
 */
  tags?: string
  /**
   * Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
   */
  tag_mode?: string
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
<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid tag or machine_tag)</span>
 */
  machine_tags?: string
  /**
   * Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
   */
  machine_tag_mode?: string
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
}
