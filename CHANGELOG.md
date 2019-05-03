# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet!

## [v3.9.0] - 2019-05-03

#### Added

- [#131] Add support for overriding a port when making a rest request ([@bwg])

## [v3.8.0] - 2018-12-12

### Fixed

- [#122] Dedupe items in the "extras" param if passed as a string, array, or set. ([@pdokas])
- [#129] Clean `undefined` oauth params from the base string. ([@jeremyruppel])

## [v3.7.0] - 2018-02-14

This release fixes a bug in the client-side build of the SDK where CORS preflight requests weren't being honored by the Flickr API. Big ups to [@ebisbe] and [@baohouse] for their help uncovering this issue in our client.

#### Fixed

- [#121] Browser REST client should request `text/plain` even though it gets back `application/json` ([@jeremyruppel])

## [v3.6.0] - 2018-01-23

This release adds support for passing in `extras` as a Set, which is semantically exactly what the Flickr REST API expects.

#### Added

- [#119] `extras` can now be passed in as a Set ([@pdokas])

## [v3.5.0] - 2017-11-02

Yay open source! This release upgrades superagent to [v3.8.0](https://github.com/visionmedia/superagent/releases/tag/v3.8.0), which includes [a patch](https://github.com/visionmedia/superagent/pull/1291) to allow for more control over response errors.

#### Removed

- [#118] Removed custom JSON parsers in favor of throwing in superagent's `.ok()` callback ([@jeremyruppel])

## [v3.4.0] - 2017-10-04

**Huge** shout out to [@ebisbe] for letting us know that the REST client was [super broken in the browser](https://github.com/flickr/flickr-sdk/issues/111). This release fixes that!

#### Fixed

- [#113] Updated link to webpack site ([@christianhg])
- [#116] Fixed extremely broken REST API parser for the browser ([@jeremyruppel])

## [v3.3.0] - 2017-09-19

We've removed the `X-Flickr-API-Method` header from our REST API client because it doesn't work in the browser. Our bad!

#### Removed

- [#110] Removed the `X-Flickr-API-Method` introduced in [#64]. ([@jeremyruppel])

## [v3.2.0] - 2017-08-24

Starting with this release, there will be a browser-ready `flickr-sdk.js` file in the module root that can be used out-of-the-box. This file is not minified and does not support OAuth authentication for Upload, Replace, or REST API calls. If you need any further customization for your client-side app, we recommend using the client-side module bundler of your choice.

#### Added

- [#109] Build a standalone version for the browser with each new npm release. ([@jeremyruppel])

## [v3.1.1] - 2017-08-22

Forgot to remove the "next" tag and npm makes it __SUPER DIFFICULT__ to unpublish modules, so here's a patch release that removes the tag and makes this the go-forward default release track!

## [v3.1.0] - 2017-08-22

#### Changed

- [#104] Upload/Replace services now parse the response body. ([@jeremyruppel])

## [v3.0.0-alpha.6] - 2017-08-08

#### Added

- [#90] Replace service! ([@jeremyruppel])
- [#94] You can pass your Flickr API key as a string to the REST service constructor instead of providing an auth superagent plugin. ([@jeremyruppel])

## [v3.0.0-alpha.5] - 2017-07-19

#### Changed

- [#69] Feeds responses are now JSON by default. They used to have the JSONP wrapper. ([@jeremyruppel])

#### Added

- [#72] Added an OAuth plugin factory method and an example of how to use it in an OAuth flow. ([@jeremyruppel])
- [#73] Added an OAuth helper method for generating the OAuth authorize url. ([@jeremyruppel])
- [#80] Upload service! ([@jeremyruppel])
- [#85] Added a static method to create OAuth plugins. ([@jeremyruppel])

## [v3.0.0-alpha.4] - 2017-06-12

#### Added

- [#64] REST API calls will now always have the `X-Flickr-API-Method` header added. This isn't required to use the API, it's just a convenience header for downstream plugins. ([@jeremyruppel])

## [v3.0.0-alpha.3] - 2017-06-07

Nothing super important!

## [v3.0.0-alpha.2] - 2017-06-07

#### Removed

- [#62] OAuth 1.0 is not supported in the browser. ([@jeremyruppel])

## [v3.0.0-alpha.1] - 2017-06-07

#### Added

- [#55] For all REST API methods, you can pass `extras` as an Array and it will be formatted properly for the API. ([@jeremyruppel])

#### Removed

- [#58] Upgrade to latest [superagent] and remove support for node <4. ([@jeremyruppel])

## [v2.1.0] - 2017-05-09

#### Fixed

- [#56] Fixed `flickrTransport` being undefined in the browser. ([@smoogly])

#### Added

- [#57] Added a method for `getPhotoSizesByID`. ([@smoogly])

## v3.0.0 aka The Schism™ - 2016-10-27

This "release" marks the start of a complete rewrite of the Flickr SDK. Once the major release is ready, `master` will point to the new timeline and the `2.x` branch will point to the previous version.

> This version was published to npm by mistake and shouldn't be used.

#### Removed

- [#18] EVERYTHING. ([@jeremyruppel])

<!-- contributors -->

[@jeremyruppel]: https://github.com/jeremyruppel
[@pdokas]: https://github.com/pdokas
[@smoogly]: https://github.com/smoogly
[@christianhg]: https://github.com/christianhg
[@ebisbe]: https://github.com/ebisbe
[@baohouse]: https://github.com/baohouse
[@bwg]: https://github.com/bwg

<!-- releases -->

[v2.1.0]: https://github.com/flickr/flickr-sdk/compare/v2.0.1...v2.1.0
[v3.0.0-alpha.1]: https://github.com/flickr/flickr-sdk/compare/v3.0.0...v3.0.0-alpha.1
[v3.0.0-alpha.2]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.1...v3.0.0-alpha.2
[v3.0.0-alpha.3]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.2...v3.0.0-alpha.3
[v3.0.0-alpha.4]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.3...v3.0.0-alpha.4
[v3.0.0-alpha.5]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.4...v3.0.0-alpha.5
[v3.0.0-alpha.6]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.5...v3.0.0-alpha.6
[v3.1.0]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.6...v3.1.0
[v3.1.1]: https://github.com/flickr/flickr-sdk/compare/v3.1.0...v3.1.1
[v3.2.0]: https://github.com/flickr/flickr-sdk/compare/v3.1.1...v3.2.0
[v3.3.0]: https://github.com/flickr/flickr-sdk/compare/v3.2.0...v3.3.0
[v3.4.0]: https://github.com/flickr/flickr-sdk/compare/v3.3.0...v3.4.0
[v3.5.0]: https://github.com/flickr/flickr-sdk/compare/v3.4.0...v3.5.0
[v3.6.0]: https://github.com/flickr/flickr-sdk/compare/v3.5.0...v3.6.0
[v3.7.0]: https://github.com/flickr/flickr-sdk/compare/v3.6.0...v3.7.0
[v3.8.0]: https://github.com/flickr/flickr-sdk/compare/v3.7.0...v3.8.0
[v3.9.0]: https://github.com/flickr/flickr-sdk/compare/v3.8.0...v3.9.0
[Unreleased]: https://github.com/flickr/flickr-sdk/compare/v3.9.0...master

<!-- pull requests -->

[#18]: https://github.com/flickr/flickr-sdk/pull/18
[#55]: https://github.com/flickr/flickr-sdk/pull/55
[#56]: https://github.com/flickr/flickr-sdk/pull/56
[#57]: https://github.com/flickr/flickr-sdk/pull/57
[#58]: https://github.com/flickr/flickr-sdk/pull/58
[#62]: https://github.com/flickr/flickr-sdk/pull/62
[#64]: https://github.com/flickr/flickr-sdk/pull/64
[#69]: https://github.com/flickr/flickr-sdk/pull/69
[#72]: https://github.com/flickr/flickr-sdk/pull/72
[#73]: https://github.com/flickr/flickr-sdk/pull/73
[#80]: https://github.com/flickr/flickr-sdk/pull/80
[#85]: https://github.com/flickr/flickr-sdk/pull/85
[#90]: https://github.com/flickr/flickr-sdk/pull/90
[#94]: https://github.com/flickr/flickr-sdk/pull/94
[#104]: https://github.com/flickr/flickr-sdk/pull/104
[#109]: https://github.com/flickr/flickr-sdk/pull/109
[#110]: https://github.com/flickr/flickr-sdk/pull/110
[#113]: https://github.com/flickr/flickr-sdk/pull/113
[#116]: https://github.com/flickr/flickr-sdk/pull/116
[#118]: https://github.com/flickr/flickr-sdk/pull/118
[#119]: https://github.com/flickr/flickr-sdk/pull/119
[#121]: https://github.com/flickr/flickr-sdk/pull/121
[#122]: https://github.com/flickr/flickr-sdk/pull/122
[#129]: https://github.com/flickr/flickr-sdk/pull/129
[#131]: https://github.com/flickr/flickr-sdk/pull/131

<!-- other links -->

[superagent]: https://github.com/visionmedia/superagent
