from django.shortcuts import render


def mainPage(request):
    return render(request, 'main/home.html')


def searchPage(request):
    return render(request, 'main/search.html')


def myLibrary(request):
    return render(request, 'main/mylibrary.html')


def myProfile(request):
    return render(request, 'main/myprofile.html')


def onRepeatSelections(request):
    return render(request, 'main/personal_selections/on_repeat.html')


def timeCapsuleSelections(request):
    return render(request, 'main/personal_selections/time_capsule.html')


def flashbackSelections(request):
    return render(request, 'main/personal_selections/flashback.html')


def mySongsPlaylist(request):
    return render(request, 'main/playlists/mysongs_playlist.html')


def foryouChartlist(request):
    return render(request, 'main/chartlists/foryou_chartlist.html')


def newreleasesChartlist(request):
    return render(request, 'main/chartlists/newreleases_chartlist.html')