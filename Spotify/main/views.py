from django.shortcuts import render


def mainPage(request):
    return render(request, 'main/home.html')


def searchPage(request):
    return render(request, 'main/search.html')


def myLibrary(request):
    return render(request, 'main/mylibrary.html')


def myProfile(request):
    return render(request, 'main/myprofile.html')