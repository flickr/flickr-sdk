/**
 * This file was auto-generated on 2023-10-24T15:44:49.927Z
 * flickr.testimonials.editTestimonial
 * Change the text of a testimonial. The loggedin user must be the author of the existing testimonial. Editing a testimonial will mark it as pending and will require it to be re-approved by the recipient before appearing on their profile
 * Permissions required: write
 */
export type FlickrTestimonialsEditTestimonialParams = {
  /**
   * The NSID of the user the testimonial is about
   */
  user_id: string
  /**
   * The ID of the testimonial to edit
   */
  testimonial_id: string
  /**
   * The text of the testimonial. HTML/BBCode is not accepted
   */
  testimonial_text: string
}
