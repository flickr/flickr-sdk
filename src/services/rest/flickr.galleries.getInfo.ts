/**
 * This file was auto-generated on 2023-10-24T15:44:49.714Z
 * flickr.galleries.getInfo
 *
 * Permissions required: none
 */
export type FlickrGalleriesGetInfoParams = {
  /**
   * The gallery ID you are requesting information for.
   */
  gallery_id: string
  /**
   * size of the primary photo
   */
  primary_photo_size?: string
  /**
   * size of the cover photos (excluding the primary photo)
   */
  cover_photos_size?: string
  /**
   * number of cover photos to fetch for galleries without a primary photo. Default is 6
   */
  limit?: string
  /**
   * number of cover photos to fetch (excluding primary photo) for galleries with a primary photo. Default is 2.
   */
  short_limit?: string
}
