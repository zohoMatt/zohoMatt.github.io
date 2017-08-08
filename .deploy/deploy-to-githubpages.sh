#!/usr/bin/env bash

cd ../docs

# Create a git
git init
git remote add origin https://github.com/zohoMatt/zohoMatt.github.io.git

# Commit all
git add -A
git commit -m "dist: DISTRIBUTION AT TIME: $(date)"

# Remove remote branch and commit the local one as replacement
git push origin --delete master
git push origin master
