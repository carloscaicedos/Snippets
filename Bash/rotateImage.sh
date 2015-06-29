#!/bin/bash
# Rotate images with ImageMagick

cd $1
FILES=$(find ./ -type f)
for f in $FILES
do
echo $f
convert $f -rotate -90 $f
done