#!/usr/bin/env bash

set -ex

node package.json
npm run build-rest
npm run build-docs
npm run build-tests
npm run build-client
npm run lint
npm run test
