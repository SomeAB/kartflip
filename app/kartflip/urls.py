"""
URL configuration for kartflip project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from mainapp.views import home


urlpatterns = [
    # Path for Django admin interface
    path('admin/', admin.site.urls),

    # Django Allauth
    path('accounts/', include('allauth.urls')),

    # Project-level 'home' URL directly pointing to the home view
    # This ensures Allauth can find the 'home' URL name for redirects
    path('', home, name='home'),

    # Include all other mainapp URLs with namespace
    path('', include('mainapp.urls')),
]
