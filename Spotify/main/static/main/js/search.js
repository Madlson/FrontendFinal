function searchInput() {

    let searchInput = document.getElementById('search-input').value;
    let playlist = '';
    let playlistBlock = document.getElementById('playlist-block');
    let nothingFound = document.getElementById('nothing-found');

    searchInput = searchInput.trim();
    
    const chart_list = [

        {
            href: 'foryou_chartlist.html',
            title: 'For you',
            img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'rgb(30, 50, 100)'
        },

        {
            href: 'newreleases_chartlist.html',
            title: 'New releases',
            img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
            bgColor: 'rgb(232, 17, 91)'
        },

        {
            href: 'pop_chartlist.html',
            title: 'Pop',
            img: 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768',
            bgColor: 'rgb(20, 138, 8)'
        },

        {
            href: 'hiphop_chartlist.html',
            title: 'Hip-Hop',
            img: 'https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1',
            bgColor: 'rgb(188, 89, 0)'
        },

        {
            href: 'dance_chartlist.html',
            title: 'Dance',
            img: 'https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196',
            bgColor: 'rgb(216, 64, 0)'
        },

        {
            href: 'forgamers_chartlist.html',
            title: 'For gamers',
            img: 'https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f',
            bgColor: 'rgb(30, 50, 100)'
        },

        {
            href: 'rock_chartlist.html',
            title: 'Rock',
            img: 'https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e',
            bgColor: 'rgb(233, 17, 41)'
        },

        {
            href: 'kpop_chartlist.html',
            title: 'K-Pop',
            img: 'https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a',
            bgColor: 'rgb(20, 138, 8)'
        },

        {
            href: 'relax_chartlist.html',
            title: 'Relax',
            img: 'https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170',
            bgColor: 'rgb(216, 64, 0)'
        },

        {
            href: 'r&b_chartlist.html',
            title: 'R&B',
            img: 'https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c',
            bgColor: 'rgb(220, 20, 140)'
        },

        {
            href: 'jazz_chartlist.html',
            title: 'Jazz',
            img: 'https://i.scdn.co/image/ab67fb8200005cafe289743024639ea8f202364d',
            bgColor: 'rgb(119, 119, 119)'
        },

        {
            href: 'disney_chartlist.html',
            title: 'Disney',
            img: 'https://i.scdn.co/image/ab67fb8200005caf89f004e1bf07dca45ce9c64c',
            bgColor: 'rgb(13, 114, 234)'
        },

        {
            href: 'netflix_chartlist.html',
            title: 'Netflix',
            img: 'https://i.scdn.co/image/ab67fb8200005caf0b0c71c920d6a745461ada69',
            bgColor: 'rgb(235, 30, 50)'
        },

        {
            href: 'classic_chartlist.html',
            title: 'Classic',
            img: 'https://i.scdn.co/image/ab67fb8200005caf12809992dfc5b318892ea07b',
            bgColor: 'rgb(125, 75, 50)'
        }
            
    ]

    for(let i = 0; i < chart_list.length; i++) {
        if (searchInput.toLowerCase() === chart_list[i].title.toLowerCase()) {
            playlist = chart_list[i];
            playlistBlock.innerHTML += '<a href="' + playlist.href + '" class="playlist_all_the_rest_block" style="background-color: ' + playlist.bgColor + '">' + 
                                      '<h1>' + playlist.title + '</h1>' +
                                      '<img src="' + playlist.img + '" alt="">'
        }
        nothingFound.style.display = 'none';
    }

}