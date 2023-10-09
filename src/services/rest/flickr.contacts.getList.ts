/**
 * flickr.contacts.getList
 * Get a list of contacts for the calling user.
 */
export interface FlickrContactsGetListParams {
  /**
 * An optional filter of the results. The following values are valid:<br />
&nbsp;
<dl>
	<dt><b><code>friends</code></b></dt>
	<dl>Only contacts who are friends (and not family)</dl>

	<dt><b><code>family</code></b></dt>
	<dl>Only contacts who are family (and not friends)</dl>

	<dt><b><code>both</code></b></dt>
	<dl>Only contacts who are both friends and family</dl>

	<dt><b><code>neither</code></b></dt>
	<dl>Only contacts who are neither friends nor family</dl>
</dl>
 */
  filter?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 1000. The maximum allowed value is 1000.
   */
  per_page?: string
  /**
   * The order in which to sort the returned contacts. Defaults to name. The possible values are: name and time.
   */
  sort?: string
}
