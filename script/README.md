# Scripts

This directory contains scripts used to update, build, and document this SDK.

### reflect.js

Uses the Flickr reflection APIs to pull down JSON files describing all available REST API methods. These are then committed to the repo because they don't change very often and we don't want to have to make API calls just to update the README or REST client code.

This script requires that you have the `FLICKR_API_KEY` environment variable set.

**Usage**

```
$ export FLICKR_API_KEY=# your api key
$ npm run reflect
```

> NB: If any methods are added or updated, you should also build the tests, REST client and README commands afterwards.

### build-rest.js

Uses the REST API definitions in `src/` and the [REST API client template](build-rest.ejs) to write out the client code to `services/rest.js`.

**Usage**

```
$ npm run build-rest
```

### build-tests.js

Uses the REST API definitions in `src/` and the [test template](build-tests.ejs) to write out tests for each REST API method to the `test/` directory.

**Usage**

```
$ npm run build-tests
```

### build-docs.js

Uses jsdoc to build the [README](../README.md) documentation.

**Usage**

```
$ npm run build-docs
```

### build

Builds both the REST client and docs for convenience.

**Usage**

```
$ npm run build
```
