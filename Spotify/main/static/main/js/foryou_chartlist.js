let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let count_track = document.querySelector('.count-track');
let duration_track = document.querySelector('.duration-track');

let pauseBtnTrack = document.getElementById('pause_playlist');
let playBtnTrack = document.getElementById('play_playlist');
let musicPlayBtn = document.getElementById('music_play_playlist');
let musicPauseBtn = document.getElementById('music_pause_playlist');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let volumeIcon = document.querySelector('#volume-icon');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.random-icon');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


const music_list = [

    {
        img: 'https://i.scdn.co/image/ab67616d00001e021931e871b553e94fe78a6cfa',
        name: 'Вечеринка',
        artist: 'Скриптонит',
        music: 'musics/Скриптонит_-_Вечеринка.mp3'
    },

    {
        img: 'https://i.scdn.co/image/ab67616d00001e021de3058124936bc563d5a309',
        name: 'Положение',
        artist: 'Скриптонит',
        music: 'musics/Скриптонит_-_Положение.mp3'
    },

    {
        img: 'https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8',
        name: 'fake smile',
        artist: 'Ariana Grande',
        music: 'musics/Ariana_Grande_-_fake_smile.mp3'
    },

    {
        img: 'https://i.scdn.co/image/ab67616d00001e021895052324f123becdd0d53d',
        name: 'How You Like That',
        artist: 'BLACKPINK',
        music: 'musics/BLACKPINK_-_How_You_Like_That.mp3'
    },

    {
        img: 'https://i.scdn.co/image/ab67616d00001e02bba7cfaf7c59ff0898acba1f',
        name: 'Losses',
        artist: 'Drake',
        music: 'musics/Ariana_Grande_-_fake_smile.mp3'
    }

]

count_track.innerHTML = music_list.length + " tracks";


loadTrack(track_index);


function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener("ended", nextTrack);
}


function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}


function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}


function playRandom() {
    isRandom = true;
    randomIcon.innerHTML = '<svg role="img" height="16" width="16" fill="#1abc54" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg>';
}


function pauseRandom(){
    isRandom = false;
    randomIcon.innerHTML = '<svg role="img" height="16" width="16" fill="#7a7a7a" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg>';
}


function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}


function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}


function playTrack(){
    curr_track.play();
    isPlaying = true;
    playBtnTrack.style.display = "none";
    musicPlayBtn.style.display = "none";
    pauseBtnTrack.style.display = "block";
    musicPauseBtn.style.display = "block";
}


function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playBtnTrack.style.display = "block";
    musicPlayBtn.style.display = "block";
    pauseBtnTrack.style.display = "none";
    musicPauseBtn.style.display = "none";
}


function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}


function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}


function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}


function setVolume(){
    curr_track.volume = volume_slider.value / 100;
    if (curr_track.volume == 0) {
        volumeIcon.innerHTML = '<svg role="presentation" height="16" width="16" fill="#a7a7a7" aria-hidden="true" aria-label="Без звука" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path><path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>';
    }
    else {
        volumeIcon.innerHTML = '<svg role="presentation" height="16" width="16" fill="#a7a7a7" aria-hidden="true" aria-label="Высокая громкость" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>'
    }
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}