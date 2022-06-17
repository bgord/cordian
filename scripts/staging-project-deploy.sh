#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

OUT_DIR="build"

validate_non_empty $OUT_DIR "OUT_DIR"

rsync -azP --delete build/ staging:/var/www/cordian

success "Project deployed correctly!"
