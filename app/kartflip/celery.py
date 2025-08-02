# Standard library imports
import os

# Third-party imports
from celery import Celery

# Set the default Django settings module for the 'celery' program
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kartflip.settings')

# Create the Celery application instance
app = Celery('kartflip')

# Load configuration from Django settings, using the 'CELERY_' namespace
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-discover tasks from all registered Django app configs
app.autodiscover_tasks()


# LIST OF PERIODIC TASKS



