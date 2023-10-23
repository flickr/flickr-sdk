/**
 * This file was auto-generated on 2023-10-24T15:44:49.874Z
 * flickr.places.placesForContacts
 * Return a list of the top 100 unique places clustered by a given placetype for a user's contacts.
 * Permissions required: read
 */
export type FlickrPlacesPlacesForContactsParams = {
  /**
 * A specific place type to cluster photos by. <br /><br />

Valid place types are :

<ul>
<li><strong>neighbourhood</strong> (and neighborhood)</li>
<li><strong>locality</strong></li>
<li><strong>region</strong></li>
<li><strong>country</strong></li>
<li><strong>continent</strong></li>
</ul>
<br />
<span style="font-style:italic;">The "place_type" argument has been deprecated in favor of the "place_type_id" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the <a href="http://www.flickr.com/services/api/flickr.places.getPlaceTypes.html">flickr.places.getPlaceTypes</a> method. (While optional, you must pass either a valid place type or place type ID.)</span>
 */
  place_type?: string
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
<br /><span style="font-style:italic;">(While optional, you must pass either a valid place type or place type ID.)</span>
 */
  place_type_id?: string
  /**
 * A Where on Earth identifier to use to filter photo clusters. For example all the photos clustered by <strong>locality</strong> in the United States (WOE ID <strong>23424977</strong>).<br /><br />
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

For example if your contacts only have <strong>3</strong> photos taken in the locality of Montreal</strong> (WOE ID 3534) but your threshold is set to <strong>5</strong> then those photos will be "rolled up" and included instead with a place record for the region of Quebec (WOE ID 2344924).
 */
  threshold?: string
  /**
   * Search your contacts. Either 'all' or 'ff' for just friends and family. (Default is all)
   */
  contacts?: string
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
