/**
 * flickr.testimonials.getAllTestimonialsBy
 * Get all testimonials (pending and approved) written by the given user
 */
export interface FlickrTestimonialsGetAllTestimonialsByParams {
  /**
   * Page number. Default is 0
   */
  page?: string
  /**
   * Number of testimonials to return per page. Default is 10, maximum is 50
   */
  per_page?: string
}
