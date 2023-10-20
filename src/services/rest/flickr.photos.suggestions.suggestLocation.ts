/**
 * This file was auto-generated on 2023-10-20T16:36:46.756Z
 * flickr.photos.suggestions.suggestLocation
 * Suggest a geotagged location for a photo.
 */
export interface FlickrPhotosSuggestionsSuggestLocationParams {
  /**
   * The photo whose location you are suggesting.
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
   * The WOE ID of the location used to build the location hierarchy for the photo.
   */
  woe_id?: string
  /**
   * The Flickr Places ID of the location used to build the location hierarchy for the photo.
   */
  place_id?: string
  /**
   * A short note or history to include with the suggestion.
   */
  note?: string
}
