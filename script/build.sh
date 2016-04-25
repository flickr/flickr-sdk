#!/usr/bin/env bash

set -ex

if [ ! -d "build" ]; then
  mkdir -p build
fi

# Browserify
echo "Browserifying..."
browserify --no-builtins -r ./flickr-sdk.js:flickr --ignore browserify -p licensify > ./build/flickr.js
uglifyjs ./build/flickr.js -o ./build/flickr.min.js --preamble "// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms."

# Run the tests
echo "Running tests..."
npm test

# Generate coverage reports
echo "Generating test coverage report..."
npm run coverage