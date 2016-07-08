#!/usr/bin/env bash

set -ex

if [ ! -d "build" ]; then
  mkdir -p build
fi

# Browserify
echo "Browserifying..."
browserify -r ./flickr-sdk.js:flickr-sdk --ignore browserify -p licensify > ./build/flickr-sdk.js
uglifyjs ./build/flickr-sdk.js -o ./build/flickr-sdk.min.js --preamble "// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms."

# Run the tests
echo "Running tests..."
npm test

# Generate coverage reports
echo "Generating test coverage report..."
npm run coverage