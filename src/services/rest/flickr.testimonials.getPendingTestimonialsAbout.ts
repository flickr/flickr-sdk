/**
 * flickr.testimonials.getPendingTestimonialsAbout
 * Get all pending testimonials written about the given user
 */
export interface FlickrTestimonialsGetPendingTestimonialsAboutParams {
  /**
   * Page number. Default is 0
   */
  page?: string
  /**
   * Number of testimonials to return per page. Default is 10, maximum is 50
   */
  per_page?: string
}
