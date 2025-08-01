#!/bin/sh

# This script starts both the Celery worker and the Celery beat scheduler.

# Exit immediately if a command exits with a non-zero status.
set -e

# Start the Celery worker in the background.
# The '&' symbol sends the process to the background.
celery -A kartflip worker --loglevel=info &

# Start the Celery beat scheduler in the foreground.
# This will be the main process for the container. If it fails, the container will stop.
celery -A kartflip beat --loglevel=info --scheduler django_celery_beat.schedulers:DatabaseScheduler
