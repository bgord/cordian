#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

PROJECT_NAME=$(basename `git rev-parse --show-toplevel`)

OUT_DIR="build"

validate_non_empty $OUT_DIR "OUT_DIR"

rsync -azP --delete build/ staging:/var/www/$PROJECT_NAME

success "Project deployed correctly!"
