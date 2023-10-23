/**
 * This file was auto-generated on 2023-10-24T15:44:49.883Z
 * flickr.prefs.getGeoPerms
 * Returns the default privacy level for geographic information attached to the user's photos and whether or not the user has chosen to use geo-related EXIF information to automatically geotag their photos.

Possible values, for viewing geotagged photos, are:

<ul>
<li>0 : <i>No default set</i></li>
<li>1 : Public</li>
<li>2 : Contacts only</li>
<li>3 : Friends and Family only</li>
<li>4 : Friends only</li>
<li>5 : Family only</li>
<li>6 : Private</li>
</ul>

Users can edit this preference at <a href="http://www.flickr.com/account/geo/privacy/">http://www.flickr.com/account/geo/privacy/</a>.
<br /><br />
Possible values for whether or not geo-related EXIF information will be used to geotag a photo are:

<ul>
<li>0: Geo-related EXIF information will be ignored</li>
<li>1: Geo-related EXIF information will be used to try and geotag photos on upload</li>
</ul>

Users can edit this preference at <a href="http://www.flickr.com/account/geo/exif/?from=privacy">http://www.flickr.com/account/geo/exif/?from=privacy</a>
 * Permissions required: read
 */
export type FlickrPrefsGetGeoPermsParams = {}
