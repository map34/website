#!/usr/bin/env bash

set -e
git remote set-url origin https://${GITHUB_TOKEN}@github.com/map34/website.git

echo "Upgrading version..."
echo "Current branch: $(git branch)"
echo "Switching to ${TRAVIS_BRANCH}"
git checkout $TRAVIS_BRANCH
git reset --hard && git clean -fd
npm version patch -m "[skip travis] Upgrade to version %s"
git push --follow-tags

echo "Deploying to Firebase..."
npm run deploy:firebase -- --token $FIREBASE_TOKEN
