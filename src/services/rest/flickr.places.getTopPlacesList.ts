/**
 * This file was auto-generated on 2023-10-24T15:44:49.872Z
 * flickr.places.getTopPlacesList
 * Return the top 100 most geotagged places for a day.
 * Permissions required: none
 */
export type FlickrPlacesGetTopPlacesListParams = {
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
   * A valid date in YYYY-MM-DD format. The default is yesterday.
   */
  date?: string
  /**
   * Limit your query to only those top places belonging to a specific Where on Earth (WOE) identifier.
   */
  woe_id?: string
  /**
   * Limit your query to only those top places belonging to a specific Flickr Places identifier.
   */
  place_id?: string
}
