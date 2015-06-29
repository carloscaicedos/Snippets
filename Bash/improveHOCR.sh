#!/bin/bash
cd $1
FILES=$(find ./ -type f)
for f in $FILES
do
echo $f
sed -i '/<\/title>/ r ../improveHOCR.js' $f
sed -i '1d' $f
done