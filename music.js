var prev = document.querySelector('#prev');
var playPause = document.querySelector('#playnPause');
var next = document.querySelector('#next');
var image = document.querySelector('#songImage');
var songName = document.querySelector('#songName');
var singer = document.querySelector('#singer');



var songNum=0;
var indicator = 0; // --> To check if song is in play state or pause
//creating audio element
var song = document.createElement('audio');

//All song list
var allSong = [
    {
        name: "Bang Bang - Title Track",
        path: "audios/Bang Bang Benny Dayal 320 Kbps.mp3",
        img: "images/Bang Bang poster 8sep14 2.jpg",
        singer : "Chandradeep Prasad"
    },
    {
        name: "Offo - 2 States",
        path: "audios/Offo - 2 States 320 Kbps.mp3",
        img: "images/2statesicon.jpg",
        singer : "Chandradeep Prasad 2"
    },
    {
        name: "Ranjha - Shershaah",
        path: "audios/Ranjha - Shershaah.mp3",
        img: "images/ranhaIcon.jpg",
        singer : "Chandradeep Prasad 3"
    },
    {
        name: "Death Bed",
        path: "audios/Powfu-death-bed.mp3",
        img: "iimages/powfu.jpg",
        singer : "Chandradeep Prasad 4"
    },
    {
        name: "Night Changes",
        path: "audios/Night-Changes_320(PagalWorld).mp3",
        img: "images/nightChanges.jpg",
        singer : "Chandradeep Prasad 5"
    },
    {
        name: "Man Without Love",
        path: "audios/manWithoutLove.mp3",
        img: "images/moonknight.jpg",
        singer : "Chandradeep Prasad 6"
    }

];

// --- All functions ---

// --- Function for getting tracks
function getTrack(songNum){
    song.src = allSong[songNum].path;
    songName.innerHTML = allSong[songNum].name;
    image.src = allSong[songNum].img;
    singer.innerHTML = allSong[songNum].singer;
    song.load()
}
getTrack(songNum)


// --- Play and Pause Function
function playandPause(){
    if(indicator == 0){
        playSong();
    }else{
        pauseSong();
    }
}

//Function for play
function playSong(){
    song.play()
    indicator=1;
    playPause.innerHTML = '<i class = "<i class="fa-solid fa-circle-pause"></i>'
}

/// Function to Pause Song
function pauseSong(){
    song.pause();
    indicator = 0;
    playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>'
}

// Function for next song
function nextSong(){
    if(songNum < (allSong.length - 1)){
        songNum+=1;
        getTrack(songNum);
        playSong();
    }else{
        songNum = 0
        getTrack(songNum);
        playSong();
    }
}


// Functio for previous song
function prevSong(){
    if(songNum > 0){
        songNum--;
        getTrack(songNum);
        playSong();
    }else{
        songNum = allSong.length-1
        getTrack(songNum);
        playSong();
    }
}
