/**
 * flickr.testimonials.getPendingTestimonialsBy
 * Get all pending testimonials written by the given user
 */
export interface FlickrTestimonialsGetPendingTestimonialsByParams {
  /**
   * Page number. Default is 0
   */
  page?: string
  /**
   * Number of testimonials to return per page. Default is 10, maximum is 50
   */
  per_page?: string
}
