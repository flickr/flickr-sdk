#!/usr/bin/env bash
set -ex

# Generate the coverage report
NODE_ENV=test istanbul cover _mocha --report lcovonly -- -R spec

# Pipe it into coveralls
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js -v

# Delete coverage artifacts
rm -rf ./coverage
