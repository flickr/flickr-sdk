/**
 * This file was auto-generated on 2023-10-20T16:36:46.676Z
 * flickr.galleries.getListForPhoto
 * Return the list of galleries to which a photo has been added.  Galleries are returned sorted by date which the photo was added to the gallery.
 */
export interface FlickrGalleriesGetListForPhotoParams {
  /**
   * The ID of the photo to fetch a list of galleries for.
   */
  photo_id: string
  /**
   * Number of galleries to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
