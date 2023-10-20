/**
 * This file was auto-generated on 2023-10-20T16:36:46.781Z
 * flickr.places.placesForBoundingBox
 * Return all the locations of a matching place type for a bounding box.<br /><br />

The maximum allowable size of a bounding box (the distance between the SW and NE corners) is governed by the place type you are requesting. Allowable sizes are as follows:

<ul>
<li><strong>neighbourhood</strong>: 3km (1.8mi)</li>
<li><strong>locality</strong>: 7km (4.3mi)</li>
<li><strong>county</strong>: 50km (31mi)</li>
<li><strong>region</strong>: 200km (124mi)</li>
<li><strong>country</strong>: 500km (310mi)</li>
<li><strong>continent</strong>: 1500km (932mi)</li>
</ul>
 */
export interface FlickrPlacesPlacesForBoundingBoxParams {
  /**
   * A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. The 4 values represent the bottom-left corner of the box and the top-right corner, minimum_longitude, minimum_latitude, maximum_longitude, maximum_latitude.
   */
  bbox: string
  /**
 * The name of place type to using as the starting point to search for places in a bounding box. Valid placetypes are:

<ul>
<li>neighbourhood</li>
<li>locality</li>
<li>county</li>
<li>region</li>
<li>country</li>
<li>continent</li>
</ul>
<br />
<span style="font-style:italic;">The "place_type" argument has been deprecated in favor of the "place_type_id" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the <a href="http://www.flickr.com/services/api/flickr.places.getPlaceTypes.html">flickr.places.getPlaceTypes</a> method. (While optional, you must pass either a valid place type or place type ID.)</span>
 */
  place_type?: string
  /**
 * The numeric ID for a specific place type to cluster photos by. <br /><br />

Valid place type IDs are :

<ul>
<li><strong>22</strong>: neighbourhood</li>
<li><strong>7</strong>: locality</li>
<li><strong>8</strong>: region</li>
<li><strong>12</strong>: country</li>
<li><strong>29</strong>: continent</li>
</ul>
<br /><span style="font-style:italic;">(While optional, you must pass either a valid place type or place type ID.)</span>

 */
  place_type_id?: string
}
