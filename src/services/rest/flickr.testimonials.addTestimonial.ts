/**
 * flickr.testimonials.addTestimonial
 * Write a new testimonial
 */
export interface FlickrTestimonialsAddTestimonialParams {
  /**
   * ID of the user the testimonial is about
   */
  user_id: string
  /**
   * The text of the testimonial. HTML/BBCode is not accepted
   */
  testimonial_text: string
}
