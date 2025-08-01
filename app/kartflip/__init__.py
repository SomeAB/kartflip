# Conditionally import Celery only when it's available and needed
# This allows web servers (gunicorn/daphne) to run without Celery installed
try:
    from .celery import app as celery_app
    __all__ = ('celery_app',)
except ImportError:
    # Celery not available - this is fine for web servers
    __all__ = ()