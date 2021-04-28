#!/usr/bin/env bash

cd /var/www/

git add .

DATE=$(date)

git commit -m "change made on $DATE"

git push
