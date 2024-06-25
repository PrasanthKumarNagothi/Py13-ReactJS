from django.urls import path 
from . import views

urlpatterns = [
    path('get/', views.getTasks),
    path('add/', views.addTask)
]
