#!/usr/bin/env bash

set -e
git remote set-url origin https://${GITHUB_TOKEN}@github.com/map34/website.git
npm install

echo "Deploying GH pages..."
npm run deploy

echo "Upgrading version..."
git reset --hard && git clean -fd
npm version patch -m "Upgrade to version %s"
git push --follow-tags
