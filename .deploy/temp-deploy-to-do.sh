#!/usr/bin/env bash

cd ..

# Archive locally and copy to server
tar -cvf docs.tar docs/
scp docs.tar zoho@128.199.107.79:~/PROJECTS/zohoMatt/
rm docs.tar

# Login server and untar all files
ssh zoho@128.199.107.79<< 'ENDSSH'
cd ~/PROJECTS/zohoMatt/
rm -rf docs
tar -xvf docs.tar
rm docs.tar
ENDSSH

