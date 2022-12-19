from django.urls import path
from main import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('search/', views.searchPage, name='search'),
    path('my/library', views.myLibrary, name='my_library'),
    path('my/profile', views.myProfile, name='my_profile'),

    path('selections/on-repeat', views.onRepeatSelections, name='on_repeat'),
    path('selections/time-capsule', views.timeCapsuleSelections, name='time_capsule'),
]