#!/usr/bin/env bash

set -ex

# Run em
NODE_ENV=test mocha --reporter=spec
