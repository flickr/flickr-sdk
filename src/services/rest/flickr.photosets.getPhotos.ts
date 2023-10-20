/**
 * This file was auto-generated on 2023-10-20T16:36:46.774Z
 * flickr.photosets.getPhotos
 * Get the list of photos in a set.
 */
export interface FlickrPhotosetsGetPhotosParams {
  /**
   * The id of the photoset to return the photos for.
   */
  photoset_id: string
  /**
   * The user_id here is the owner of the set passed in photoset_id.
   */
  user_id: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o
   */
  extras?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 500. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
 * Return photos only matching a certain privacy level. This only applies when making an authenticated call to view a photoset you own. Valid values are:
<ul>
<li>1 public photos</li>
<li>2 private photos visible to friends</li>
<li>3 private photos visible to family</li>
<li>4 private photos visible to friends &amp; family</li>
<li>5 completely private photos</li>
</ul>

 */
  privacy_filter?: string
  /**
   * Filter results by media type. Possible values are <code>all</code> (default), <code>photos</code> or <code>videos</code>
   */
  media?: string
}
