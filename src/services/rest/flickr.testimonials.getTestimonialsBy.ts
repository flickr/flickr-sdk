/**
 * This file was auto-generated on 2023-10-20T16:36:46.812Z
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
