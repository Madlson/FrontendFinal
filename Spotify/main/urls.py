from django.urls import path
from main import views

urlpatterns = [
    path('', views.mainPage, name='home'),
    path('search/', views.searchPage, name='search'),
    path('my/library', views.myLibrary, name='my_library'),
    path('my/profile', views.myProfile, name='my_profile'),

    path('selections/on-repeat', views.onRepeatSelections, name='on_repeat'),
    path('selections/time-capsule', views.timeCapsuleSelections, name='time_capsule'),
    path('selections/flashback', views.flashbackSelections, name='flashback'),

    path('playlists/mysongs', views.mySongsPlaylist, name='my_songs_playlist'),

    path('chartlists/for-you', views.foryouChartlist, name='for_you_chartlist'),
    path('chartlists/new-releases', views.newreleasesChartlist, name='new_releases_chartlist'),
    path('chartlists/pop', views.popChartlist, name='pop_chartlist'),
    path('chartlists/hip-hop', views.hiphopChartlist, name='hip_hop_chartlist'),
    path('chartlists/dance', views.danceChartlist, name='dance_chartlist'),
    path('chartlists/for-gamers', views.forgamersChartlist, name='for_gamers_chartlist'),
    path('chartlists/rock', views.rockChartlist, name='rock_chartlist'),
    path('chartlists/k-pop', views.kpopChartlist, name='k_pop_chartlist'),
    path('chartlists/relax', views.relaxChartlist, name='relax_chartlist'),
    path('chartlists/r&b', views.rbChartlist, name='r&b_chartlist'),
    path('chartlists/jazz', views.jazzChartlist, name='jazz_chartlist'),
    path('chartlists/disney', views.disneyChartlist, name='disney_chartlist'),
    path('chartlists/netflix', views.netflixChartlist, name='netflix_chartlist'),
    path('chartlists/classic', views.classicChartlist, name='classic_chartlist'),
]