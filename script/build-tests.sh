#!/usr/bin/env bash

set -ex

# Browserify the tests
cd ./test
../node_modules/.bin/browserify -r ./*.js --standalone tests > ../build/tests.js
# Remove 'use strict'
awk '{gsub("use strict","")}1' ../build/tests.js > ../build/tests.tmp && mv ../build/tests.tmp ../build/tests.js
cd ..
