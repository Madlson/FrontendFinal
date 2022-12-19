from django.urls import path
from main import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('search/', views.searchPage, name='search'),
    path('my/library', views.myLibrary, name='my_library'),
    path('my/profile', views.myProfile, name='my_profile'),
]