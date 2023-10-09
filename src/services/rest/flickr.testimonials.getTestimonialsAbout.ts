/**
 * flickr.testimonials.getTestimonialsAbout
 * Get approved testimonials about the given user
 */
export interface FlickrTestimonialsGetTestimonialsAboutParams {
  /**
   * ID of the user to get testimonials about
   */
  user_id: string
  /**
   * Page number. Default is 0
   */
  page?: string
  /**
   * Number of testimonials to return per page. Default is 10, maximum is 50
   */
  per_page?: string
}
