/**
 * flickr.people.findByEmail
 * Return a user's NSID, given their email address
 */
export interface FlickrPeopleFindByEmailParams {
  /**
   * The email address of the user to find  (may be primary or secondary).
   */
  find_email: string
}
