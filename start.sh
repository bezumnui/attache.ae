#!/bin/sh

gunicorn 'app:app' -w 10 -b localhost:9990
