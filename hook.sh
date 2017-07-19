#!/usr/bin/env bash

set -ex

node package.json
npm run build
npm run build-docs
npm run build-tests
npm run lint
npm run test
