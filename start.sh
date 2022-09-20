#!/bin/sh

source venv/bin/activate
gunicorn 'app:app' -w 10 -b localhost:9990
