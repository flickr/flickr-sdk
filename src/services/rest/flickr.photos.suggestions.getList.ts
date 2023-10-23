/**
 * This file was auto-generated on 2023-10-24T15:44:49.843Z
 * flickr.photos.suggestions.getList
 * Return a list of suggestions for a user that are pending approval.
 * Permissions required: read
 */
export type FlickrPhotosSuggestionsGetListParams = {
  /**
   * Only show suggestions for a single photo.
   */
  photo_id?: string
  /**
 * Only show suggestions with a given status.

<ul>
<li><strong>0</strong>, pending</li>
<li><strong>1</strong>, approved</li>
<li><strong>2</strong>, rejected</li>
</ul>

The default is pending (or "0").
 */
  status_id?: string
}
