#!/bin/bash

#git pull



while getopts u arg
do
  case arg in
  u) git pull;;
  s) source venv bin activate;;
  esac
done

echo "starting application at adderss: http://localhost:9990"
gunicorn 'app:app' -w 10 -b localhost:9990 --log-level error


