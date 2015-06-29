#!/bin/bash
#Get text from images with Tesseract OCR

cd $1
FILES=$(find ./ -type f)
for f in $FILES
do
echo $f
tesseract $f $f -l spa hocr
done