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


def popChartlist(request):
    return render(request, 'main/chartlists/pop_chartlist.html')


def hiphopChartlist(request):
    return render(request, 'main/chartlists/hiphop_chartlist.html')


def danceChartlist(request):
    return render(request, 'main/chartlists/dance_chartlist.html')


def forgamersChartlist(request):
    return render(request, 'main/chartlists/forgamers_chartlist.html')


def rockChartlist(request):
    return render(request, 'main/chartlists/rock_chartlist.html')


def kpopChartlist(request):
    return render(request, 'main/chartlists/kpop_chartlist.html')


def relaxChartlist(request):
    return render(request, 'main/chartlists/relax_chartlist.html')


def rbChartlist(request):
    return render(request, 'main/chartlists/r&b_chartlist.html')


def jazzChartlist(request):
    return render(request, 'main/chartlists/jazz_chartlist.html')


def disneyChartlist(request):
    return render(request, 'main/chartlists/disney_chartlist.html')


def netflixChartlist(request):
    return render(request, 'main/chartlists/netflix_chartlist.html')


def classicChartlist(request):
    return render(request, 'main/chartlists/classic_chartlist.html')