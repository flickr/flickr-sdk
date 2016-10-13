#!/usr/bin/env bash

set -ex

node package.json
npm run build
npm run lint
npm run test
