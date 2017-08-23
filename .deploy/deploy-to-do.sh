#!/usr/bin/env bash


# Locally
cd ..
# Distribution
rm -rf docs
yarn run dist

# Go to /docs and initialize git
cd docs
git init
git remote add live ssh://zoho@mattzo.life/home/zoho/PROJECTS/gitrepos/homepage/site.git

# Commit all
git add -A
git commit -m "dist: DISTRIBUTION AT TIME: $(date)"

# Modify remote branch
git push live --delete master       # Delete remote master branch in case of conflict
git push -f live master

# Back to current folder
cd ../.deploy



