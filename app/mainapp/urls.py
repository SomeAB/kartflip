"""
This is the Django URLs file for synchronous requests in the main application.

"""

# Django imports
from django.urls import path
from django.views.generic import TemplateView

# Namespace for the main application
app_name = "mainapp"

urlpatterns = [
    path('base/', TemplateView.as_view(template_name='base/base_01.html'), name='base'),
   
]
