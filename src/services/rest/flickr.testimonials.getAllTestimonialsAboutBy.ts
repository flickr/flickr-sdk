/**
 * flickr.testimonials.getAllTestimonialsAboutBy
 * Get the testimonial by the currently logged-in user about the given user, regardless of approval status. Note that at most 1 testimonial will be returned
 */
export interface FlickrTestimonialsGetAllTestimonialsAboutByParams {
  /**
   * ID of the user to get testimonials about
   */
  user_id: string
}
