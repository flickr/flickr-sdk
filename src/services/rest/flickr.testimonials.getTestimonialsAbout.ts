/**
 * This file was auto-generated on 2023-10-20T16:36:46.811Z
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
