$(document).ready(function(){
    $('.pre').hide();
    $('.next').hide();
    $('.defaultBar').hide();
    $('.timeDisplay').hide();
    $('.songTitle').addClass('hidden');
})

$(document).ready(function(){
    $('.play').click( function(){
        $(this).toggleClass('idlePlay');
        $('.player').toggleClass('showPlayerBg');
        $('.defaultBar').fadeToggle(300);
        $('.pre').fadeToggle(300);
        $('.next').fadeToggle(300);
        $('.songTitle').toggleClass('hidden');
        $('.timeDisplay').fadeToggle(300);
     });
});

$(document).ready(function(){    
var song1 = document.getElementById('song1');
song1.volume = 0.4;

var playButton = document.getElementById("play1");

var duration = document.getElementById('b2');
var currentTime = document.getElementById('b1');

song1.addEventListener('loadedmetadata', function(){
    var minutes = parseInt(song1.duration/60);
    var seconds = parseInt(song1.duration%60);
    duration.innerHTML = minutes + ":" + seconds;
})
    
var barSize = 300;
var bar = document.getElementById('f1');
var progressBar = document.getElementById('f2');



playButton.addEventListener('click', playOrPause);
    
function playOrPause(){
    if(!song1.paused && !song1.ended){
        song1.pause();
        playButton.innerHTML = "&#xf04b;";
        window.clearInterval(updateTime);
    }
    else{
        song1.play();
        playButton.innerHTML = "&#xf04c;";
        updateTime = setInterval(update, 500);
    }
}

function update(){
    if(!song1.ended){
        var playedMinutes = parseInt(song1.currentTime/60);
        var playedSeconds = parseInt(song1.currentTime%60);
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
        
        var size = parseInt(song1.currentTime*barSize/song1.duration, 10);
        progressBar.style.width = size + "px";
    }
    else{
        currentTime.innerHTML = "0:00";
        playButton.innerHTML = "&#xf04c;";
        progressBar.style.width = "0px";
        window.clearInterval(updateTime);
    }
}
});



//$(document).ready(function(){
//    $('#solaris').hover(function(){
//        $("#player").fadeIn(300);
//    });
//    $('#solaris').mouseleave(function(){
//        $("#player").fadeOut(300);
//    })
//})


    
