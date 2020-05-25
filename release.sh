#!/usr/bin/env bash

set -e
git remote set-url origin https://${GITHUB_TOKEN}@github.com/map34/website.git
npm version patch -m "Upgrade to version %s"
npm run deploy