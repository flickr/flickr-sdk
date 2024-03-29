/**
 * This file was auto-generated on 2023-10-24T15:44:49.866Z
 * flickr.places.findByLatLon
 * Return a place ID for a latitude, longitude and accuracy triple.<br /><br />
The flickr.places.findByLatLon method is not meant to be a (reverse) geocoder in the traditional sense. It is designed to allow users to find photos for "places" and will round up to the nearest place type to which corresponding place IDs apply.<br /><br />
For example, if you pass it a street level coordinate it will return the city that contains the point rather than the street, or building, itself.<br /><br />
It will also truncate latitudes and longitudes to three decimal points.


 * Permissions required: none
 */
export type FlickrPlacesFindByLatLonParams = {
  /**
   * The latitude whose valid range is -90 to 90. Anything more than 4 decimal places will be truncated.
   */
  lat: string
  /**
   * The longitude whose valid range is -180 to 180. Anything more than 4 decimal places will be truncated.
   */
  lon: string
  /**
   * Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. The default is 16.
   */
  accuracy?: string
}
