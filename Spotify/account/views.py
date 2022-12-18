from django.contrib import auth, messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect


def RegisterAccount(request):

    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        if User.objects.filter(username=username).exists():
            messages.info(request, 'Username is already registered')
            return redirect('/account/register')
        else:
            user = User.objects.create_user(
                username=username,
                password=password
            )

            user.save()
            return redirect('login')

    return render(request, 'account/register.html')


def LoginAccount(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid credentials')
            return redirect('login')

    return render(request, 'account/login.html')


def LogoutAccount(request):
    auth.logout(request)
    return redirect('/account/login')