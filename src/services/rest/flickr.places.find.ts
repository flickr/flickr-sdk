/**
 * flickr.places.find
 * Return a list of place IDs for a query string.<br /><br />
The flickr.places.find method is <b>not</b> a geocoder. It will round <q>up</q> to the nearest place type to which place IDs apply. For example, if you pass it a street level address it will return the city that contains the address rather than the street, or building, itself.
 */
export interface FlickrPlacesFindParams {
  /**
   * The query string to use for place ID lookups
   */
  query: string
}
