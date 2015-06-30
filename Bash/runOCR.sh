#!/bin/bash
#Get text from images with Tesseract OCR

cd $1

if [ ! -d "hocr" ]; then
mkdir hocr
echo "hocr folder created!"
fi

FILES=$(find ./ -type f)
for f in $FILES
do
echo $f
tesseract $f ./hocr/$f -l spa hocr
done
