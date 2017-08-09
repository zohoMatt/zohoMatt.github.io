#!/usr/bin/env bash

cd ..

# Archive locally and copy to server
tar -cvf docs.tar docs/
scp docs.tar zoho@mattzo.life:~/PROJECTS/zohoMatt/
rm docs.tar
cd .deploy

# Login server and untar all files
ssh zoho@mattzo.life << 'ENDSSH'
cd ~/PROJECTS/zohoMatt/
rm -rf docs
tar -xvf docs.tar
rm docs.tar
ENDSSH

