/**
 * flickr.blogs.postPhoto
 *
 */
export interface FlickrBlogsPostPhotoParams {
  /**
   * The id of the blog to post to.
   */
  blog_id?: string
  /**
   * The id of the photo to blog
   */
  photo_id: string
  /**
   * The blog post title
   */
  title: string
  /**
   * The blog post body
   */
  description: string
  /**
   * The password for the blog (used when the blog does not have a stored password).
   */
  blog_password?: string
  /**
   * A Flickr supported blogging service.  Instead of passing a blog id you can pass a service id and we'll post to the first blog of that service we find.
   */
  service?: string
}
