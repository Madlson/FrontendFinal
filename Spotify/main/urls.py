from django.urls import path
from main import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('search/', views.searchPage, name='search'),
]