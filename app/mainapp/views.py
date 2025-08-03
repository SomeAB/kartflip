"""
This is the file that contains the django views for the main application.

"""


# Core Django imports
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    # Placeholder for home view logic
    return render(request, 'inside/home.html') 
