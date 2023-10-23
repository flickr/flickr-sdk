/**
 * This file was auto-generated on 2023-10-24T15:44:49.841Z
 * flickr.photos.setSafetyLevel
 * Set the safety level of a photo.
 * Permissions required: write
 */
export type FlickrPhotosSetSafetyLevelParams = {
  /**
   * The id of the photo to set the adultness of.
   */
  photo_id: string
  /**
 * The safety level of the photo.  Must be one of:

1 for Safe, 2 for Moderate, and 3 for Restricted.
 */
  safety_level?: string
  /**
   * Whether or not to additionally hide the photo from public searches.  Must be either 1 for Yes or 0 for No.
   */
  hidden?: string
}
