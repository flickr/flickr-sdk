/**
 * flickr.testimonials.getTestimonialsBy
 * Get approved testimonials written by the given user
 */
export interface FlickrTestimonialsGetTestimonialsByParams {
  /**
   * ID of the user to get testimonials written by
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
