var playBtn = document.querySelector('.play');
var icoPlay = document.querySelector('.icoPlay');
var stopBtn = document.querySelector('.stop');
var rwdBtn = document.querySelector('.rwd');
var seekSlider = document.querySelector('.seekslider');
var timeLabel = document.querySelector('.time');
var soundBtn = document.querySelector('.sound');
var icoSound = document.querySelector('.icoSound');
var soundSlider = document.querySelector('.soundslider');

var fullBtn = document.querySelector('.full');

var clip = document.querySelector('.clip');
var main = document.querySelector('.controls');



clip.removeAttribute('controls');

// play
clip.onclick = function() {
   if(clip.paused){
     clip.play();
     icoPlay.setAttribute("src", "media/ico/icoPause.png");

   } else{
     clip.pause();
     icoPlay.setAttribute("src", "media/ico/icoPlay.png");
   }
 };


 playBtn.onclick = function() {
   if(clip.paused){
     clip.play();
     icoPlay.setAttribute("src", "media/ico/icoPause.png");

   } else{
     clip.pause();
     icoPlay.setAttribute("src", "media/ico/icoPlay.png");
   }
 };
 
// stop
stopBtn.onclick = function(){
   clip.currentTime = 0
};

// rewind
rwdBtn.onclick = function() {
   clip.currentTime -= 15;
 };


// seekslider
seekSlider.onchange = function(){
  var seekto = clip.duration * (seekSlider.value / 100);
  clip.currentTime = seekto;
}

clip.ontimeupdate = function (){
  var nt = clip.currentTime * (100 / clip.duration);
  seekSlider.value = nt; 
}
 

//  timer
 clip.ontimeupdate = function() {
   var minutesAll = Math.floor(clip.duration / 60);
   var secondsAll = Math.round(clip.duration / 10);
   var minutes = "0" + Math.floor(clip.currentTime / 60);
   var seconds = Math.floor(clip.currentTime - minutes * 60);
 
  if(seconds < 10)
  {
    seconds = "0" +  Math.floor(clip.currentTime - minutes * 60);
  }else{
    seconds = seconds
  }

   mediaTime = minutes + ":" + seconds;
   mediaAll = "0" + minutesAll + ":" + secondsAll;

   timeLabel.textContent = mediaTime + "/" + mediaAll;
 };

//sound
soundBtn.onmouseover = function(){
    soundSlider.style.display = "block";
}

soundBtn.onmouseleave = function(){
    soundSlider.style.display = "none";
  }

icoSound.onclick = function(){
    if(clip.muted){
        clip.muted = false;
        icoSound.setAttribute("src", "media/ico/icoFull.png");
        }else {
        clip.muted = true;
        icoSound.setAttribute("src", "media/ico/icoMute.png");
     
    }
 };
 

// soundslider
soundSlider.onchange = function(){
  clip.volume = soundSlider.value / 100;

    if(soundSlider.value <= 70){
    icoSound.setAttribute("src", "media/ico/icoMed.png");
    }else{
      icoSound.setAttribute("src", "media/ico/icoFull.png");
    }
    if(soundSlider.value <= 30){
      icoSound.setAttribute("src", "media/ico/icoLow.png");
    }
    if(soundSlider.value <= 0){
      icoSound.setAttribute("src", "media/ico/icoNosound.png");
    }
  }


// full screen
fullBtn.onclick = function() { 
   clip.requestFullscreen();
}
