/**
 * This file was auto-generated on 2023-10-24T15:44:49.890Z
 * flickr.push.subscribe
 * In ur pandas, tickling ur unicorn
<br><br>
<i>(this method is experimental and may change)</i>
 * Permissions required: read
 */
export type FlickrPushSubscribeParams = {
  /**
   * The type of subscription. See <a href="http://www.flickr.com/services/api/flickr.push.getTopics.htm">flickr.push.getTopics</a>.
   */
  topic: string
  /**
   * The url for the subscription endpoint. Limited to 255 bytes, and must be unique for this user, i.e. no two subscriptions for a given user may use the same callback url.
   */
  callback: string
  /**
   * The verification mode, either <code>sync</code> or <code>async</code>. See the <a href="http://pubsubhubbub.googlecode.com/svn/trunk/pubsubhubbub-core-0.3.html#subscribingl">Google PubSubHubbub spec</a> for details.
   */
  verify: string
  /**
   * The verification token to be echoed back to the subscriber during the verification callback, as per the <a href="http://pubsubhubbub.googlecode.com/svn/trunk/pubsubhubbub-core-0.3.html#subscribing">Google PubSubHubbub spec</a>. Limited to 200 bytes.
   */
  verify_token?: string
  /**
   * Number of seconds for which the subscription will be valid. Legal values are 60 to 86400 (1 minute to 1 day). If not present, the subscription will be auto-renewing.
   */
  lease_seconds?: string
  /**
 * A 32-bit integer for a <a href="http://developer.yahoo.com/geo/geoplanet/">Where on Earth ID</a>. Only valid if <code>topic</code> is <code>geo</code>.
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  woe_ids?: string
  /**
 * A comma-separated list of Flickr place IDs. Only valid if <code>topic</code> is <code>geo</code>.
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  place_ids?: string
  /**
 * A latitude value, in decimal format. Only valid if <code>topic</code> is <code>geo</code>. Defines the latitude for a radial query centered around (lat, lon).
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  lat?: string
  /**
 * A longitude value, in decimal format. Only valid if <code>topic</code> is <code>geo</code>. Defines the longitude for a radial query centered around (lat, lon).
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  lon?: string
  /**
 * A radius value, in the units defined by radius_units. Only valid if <code>topic</code> is <code>geo</code>. Defines the radius of a circle for a radial query centered around (lat, lon). Default is 5 km.
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  radius?: string
  /**
 * Defines the units for the radius parameter. Only valid if <code>topic</code> is <code>geo</code>. Options are <code>mi</code> and <code>km</code>. Default is <code>km</code>.
<br/><br/>
The order of precedence for geo subscriptions is : woe ids, place ids, radial i.e. the <code>lat, lon</code> parameters will be ignored if <code>place_ids</code> is present, which will be ignored if <code>woe_ids</code> is present.
 */
  radius_units?: string
  /**
 * Defines the minimum accuracy required for photos to be included in a subscription. Only valid if <code>topic</code> is <code>geo</code> Legal values are 1-16, default is 1 (i.e. any accuracy level).
<ul>
<li>World level is 1</li>
<li>Country is ~3</li>
<li>Region is ~6</li>
<li>City is ~11</li>
<li>Street is ~16</li>
</ul>
 */
  accuracy?: string
  /**
   * A comma-separated list of nsids representing Flickr Commons institutions (see <a href="http://www.flickr.com/services/api/flickr.commons.getInstitutions.html">flickr.commons.getInstitutions</a>). Only valid if <code>topic</code> is <code>commons</code>. If not present this argument defaults to all Flickr Commons institutions.
   */
  nsids?: string
  /**
   * A comma-separated list of strings to be used for tag subscriptions. Photos with one or more of the tags listed will be included in the subscription. Only valid if the <code>topic</code> is <code>tags</code>.
   */
  tags?: string
}
