/**
 * This file was auto-generated on 2023-10-20T16:36:46.661Z
 * flickr.contacts.getListRecentlyUploaded
 * Return a list of contacts for a user who have recently uploaded photos along with the total count of photos uploaded.<br /><br />

This method is still considered experimental. We don't plan for it to change or to go away but so long as this notice is present you should write your code accordingly.
 */
export interface FlickrContactsGetListRecentlyUploadedParams {
  /**
 * Limits the resultset to contacts that have uploaded photos since this date. The date should be in the form of a Unix timestamp.

The default offset is (1) hour and the maximum (24) hours. 
 */
  date_lastupload?: string
  /**
 * Limit the result set to all contacts or only those who are friends or family. Valid options are:

<ul>
<li><strong>ff</strong> friends and family</li>
<li><strong>all</strong> all your contacts</li>
</ul>
Default value is "all".
 */
  filter?: string
}
