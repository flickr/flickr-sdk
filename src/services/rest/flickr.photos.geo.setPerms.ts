/**
 * flickr.photos.geo.setPerms
 * Set the permission for who may view the geo data associated with a photo.
 */
export interface FlickrPhotosGeoSetPermsParams {
  /**
   * 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
   */
  is_public: string
  /**
   * 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
   */
  is_contact: string
  /**
   * 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
   */
  is_friend: string
  /**
   * 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
   */
  is_family: string
  /**
   * The id of the photo to get permissions for.
   */
  photo_id: string
}
