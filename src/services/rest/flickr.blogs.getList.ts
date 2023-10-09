/**
 * flickr.blogs.getList
 * Get a list of configured blogs for the calling user.
 */
export interface FlickrBlogsGetListParams {
  /**
   * Optionally only return blogs for a given service id.  You can get a list of from <a href="/services/api/flickr.blogs.getServices.html">flickr.blogs.getServices()</a>.
   */
  service?: string
}
