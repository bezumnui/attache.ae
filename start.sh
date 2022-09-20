#!/bin/bash

#git pull



while getopts u: arg
do
  case arg in
  u) git pull;;
  s) source venv bin activate;;
  esac
done

./start.sh

