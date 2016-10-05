# flickr-sdk

> TODO everything

## troubleshooting

##### ReferenceError: Promise is not defined

superagent's Promise support assumes a Promise implementation is available globally. If you are using node 0.10, you will have to polyfill the global Promise manually.

## license

Code licensed under the MIT license. See LICENSE file for terms.
