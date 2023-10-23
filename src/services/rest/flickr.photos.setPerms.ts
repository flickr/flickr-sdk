/**
 * This file was auto-generated on 2023-10-24T15:44:49.840Z
 * flickr.photos.setPerms
 * Set permissions for a photo.
 * Permissions required: write
 */
export type FlickrPhotosSetPermsParams = {
  /**
   * The id of the photo to set permissions for.
   */
  photo_id: string
  /**
   * 1 to set the photo to public, 0 to set it to private.
   */
  is_public: string
  /**
   * 1 to make the photo visible to friends when private, 0 to not.
   */
  is_friend: string
  /**
   * 1 to make the photo visible to family when private, 0 to not.
   */
  is_family: string
  /**
 * who can add comments to the photo and it's notes. one of:<br />
<code>0</code>: nobody<br />
<code>1</code>: friends &amp; family<br />
<code>2</code>: contacts<br />
<code>3</code>: everybody
 */
  perm_comment?: string
  /**
 * who can add notes and tags to the photo. one of:<br />
<code>0</code>: nobody / just the owner<br />
<code>1</code>: friends &amp; family<br />
<code>2</code>: contacts<br />
<code>3</code>: everybody

 */
  perm_addmeta?: string
}
