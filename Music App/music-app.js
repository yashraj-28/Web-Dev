const play = document.getElementById('play');
const music = document.querySelector('audio');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
    name: '1',
    title: 'Castle Of Glass',
    artist: 'Linkin Park',
    
    },
    {
    name: '2',
    title: 'The_Nights',
    artist: 'Avicii',
    
    },
    {
    name: '3',
    title: 'Demons',
    artist: 'Imagine Dragons',
   
    }
];

// play-pause song
let isPlaying = false;


    
    
const playMusic = ()=>{
    isPlaying = true;
music.play();
//play.classList.replace('fa-play','fa-pause');
play.classList.replace('fa-play','fa-pause');
image.classList.add('anime');
};

const pauseMusic = () =>{
music.pause();
play.classList.replace('fa-pause','fa-play');
image.classList.remove('anime');
isPlaying = false;
}

play.addEventListener('click',()=>{
    isPlaying ? pauseMusic() : playMusic();
});
        

// changing songs

const changeSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "songs/" + songs.name + ".mp3";
    image.src = "images/" + songs.name + ".jpg";
}

// progress bar 
const progressBar = document.getElementById('progress');
const currTime = document.getElementById('current_time'); 
const totalTime = document.getElementById('total_time');
const progressDiv = document.getElementById('progress_bar');


music.addEventListener('timeupdate', (event) => {
    //console.log(event);
    const {currentTime, duration} = event.srcElement;
    let time = (currentTime / duration) * 100;
    progressBar.style.width = `${time}%`;
    //console.log(time);
    // changing time display
    totalTime.textContent = `${Math.floor(duration/60)}:${Math.floor(duration%60)}`;
    sec_cTime = Math.floor(currentTime%60);
    min_cTime = Math.floor(currentTime/60);
    if(sec_cTime < 10){
        sec_cTime = `0${sec_cTime}`;
    }
    currTime.textContent = `${min_cTime}:${sec_cTime}`;
   // console.log(currentTime);

});


 progressDiv.addEventListener('click', (e) => {
     //console.log(e);
     let offsetX = e.offsetX;
     let clientWidth = e.srcElement.clientWidth;

     const {duration} = music;
     //console.log(offsetX, clientWidth);
     let percent = (offsetX / clientWidth) * duration;
     //console.log(percent);
     music.currentTime = percent;
});



index = 0;
// play next music if current song ends
music.addEventListener('ended', () => {
    index = (index + 1) % songs.length;
    changeSong(songs[index]);
    playMusic();
})

 

prev.addEventListener('click', ()=>{
   index = (index - 1 + songs.length) % songs.length;
    changeSong(songs[index]);
    playMusic();
});

next.addEventListener('click', ()=>{
    index = (index + 1) % songs.length;
    changeSong(songs[index]);
    playMusic();
});

//changeSong(songs[1]);
