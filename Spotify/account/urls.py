from django.urls import path
from account import views

urlpatterns = [
    path('register', views.RegisterAccount, name='register'),
    path('login', views.LoginAccount, name='login'),
    path('logout', views.LogoutAccount, name='logout')
]