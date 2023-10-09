/**
 * flickr.push.unsubscribe
 * Why would you want to do this?
<br><br>
<i>(this method is experimental and may change)</i>
 */
export interface FlickrPushUnsubscribeParams {
  /**
   * The type of subscription. See <a href="http://www.flickr.com/services/api/flickr.push.getTopics.htm">flickr.push.getTopics</a>.
   */
  topic: string
  /**
   * The url for the subscription endpoint (must be the same url as was used when creating the subscription).
   */
  callback: string
  /**
   * The verification mode, either 'sync' or 'async'. See the <a href="http://pubsubhubbub.googlecode.com/svn/trunk/pubsubhubbub-core-0.3.html#subscribingl">Google PubSubHubbub spec</a> for details.
   */
  verify: string
  /**
   * The verification token to be echoed back to the subscriber during the verification callback, as per the <a href="http://pubsubhubbub.googlecode.com/svn/trunk/pubsubhubbub-core-0.3.html#subscribing">Google PubSubHubbub spec</a>. Limited to 200 bytes.
   */
  verify_token?: string
}
