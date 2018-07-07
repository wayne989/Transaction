#!/bin/bash
cd ./angular
ng build
cd ./dist
sed -i .bk 's/src=\"/src=\"js\//g' index.html

rm -f ../../src/main/resources/static/index.html
rm -f ../../src/main/resources/static/js/*
rm -f ../../src/main/resources/static/assets/images/*

cp index.html ../../src/main/resources/static/
cp *.js* ../../src/main/resources/static/js/
cp ./assets/images/* ../../src/main/resources/static/assets/images/

cd ../../
echo "build completed, your current directory:"
pwd