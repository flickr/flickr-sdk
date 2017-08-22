# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet!

## [3.1.0] - 2017-08-22

#### Changed

- [#104] Upload/Replace services now parse the response body. ([@jeremyruppel])

## [3.0.0-alpha.6] - 2017-08-08

#### Added

- [#90] Replace service! ([@jeremyruppel])
- [#94] You can pass your Flickr API key as a string to the REST service constructor instead of providing an auth superagent plugin. ([@jeremyruppel])

## [3.0.0-alpha.5] - 2017-07-19

#### Changed

- [#69] Feeds responses are now JSON by default. They used to have the JSONP wrapper. ([@jeremyruppel])

#### Added

- [#72] Added an OAuth plugin factory method and an example of how to use it in an OAuth flow. ([@jeremyruppel])
- [#73] Added an OAuth helper method for generating the OAuth authorize url. ([@jeremyruppel])
- [#80] Upload service! ([@jeremyruppel])
- [#85] Added a static method to create OAuth plugins. ([@jeremyruppel])

## [3.0.0-alpha.4] - 2017-06-12

#### Added

- [#64] REST API calls will now always have the `X-Flickr-API-Method` header added. This isn't required to use the API, it's just a convenience header for downstream plugins. ([@jeremyruppel])

## [3.0.0-alpha.3] - 2017-06-07

Nothing super important!

## [3.0.0-alpha.2] - 2017-06-07

#### Removed

- [#62] OAuth 1.0 is not supported in the browser. ([@jeremyruppel])

## [3.0.0-alpha.1] - 2017-06-07

#### Added

- [#55] For all REST API methods, you can pass `extras` as an Array and it will be formatted properly for the API. ([@jeremyruppel])

#### Removed

- [#58] Upgrade to latest [superagent] and remove support for node <4. ([@jeremyruppel])

## [2.1.0] - 2017-05-09

#### Fixed

- [#56] Fixed `flickrTransport` being undefined in the browser. ([@smoogly])

#### Added

- [#57] Added a method for `getPhotoSizesByID`. ([@smoogly])

## 3.0.0 aka The Schism™ - 2016-10-27

This "release" marks the start of a complete rewrite of the Flickr SDK. Once the major release is ready, `master` will point to the new timeline and the `2.x` branch will point to the previous version.

> This version was published to npm by mistake and shouldn't be used.

#### Removed

- [#18] EVERYTHING. ([@jeremyruppel])

<!-- contributors -->

[@jeremyruppel]: https://github.com/jeremyruppel
[@smoogly]: https://github.com/smoogly

<!-- releases -->

[2.1.0]: https://github.com/flickr/flickr-sdk/compare/v2.0.1...v2.1.0
[3.0.0-alpha.1]: https://github.com/flickr/flickr-sdk/compare/v3.0.0...v3.0.0-alpha.1
[3.0.0-alpha.2]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.1...v3.0.0-alpha.2
[3.0.0-alpha.3]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.2...v3.0.0-alpha.3
[3.0.0-alpha.4]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.3...v3.0.0-alpha.4
[3.0.0-alpha.5]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.4...v3.0.0-alpha.5
[3.0.0-alpha.6]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.5...v3.0.0-alpha.6
[3.1.0]: https://github.com/flickr/flickr-sdk/compare/v3.0.0-alpha.6...v3.1.0
[Unreleased]: https://github.com/flickr/flickr-sdk/compare/v3.1.0...master

<!-- pull requests -->

[#18]: https://github.com/flickr/flickr-sdk/pull/18
[#56]: https://github.com/flickr/flickr-sdk/pull/56
[#55]: https://github.com/flickr/flickr-sdk/pull/55
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

<!-- other links -->

[superagent]: https://github.com/visionmedia/superagent
