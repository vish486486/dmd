const changeToPlay = document.querySelector('.js-pause');
const audioElement = new Audio('lana.mp3');
let imageForChange = document.querySelector('.cover');

changeToPlay.addEventListener('click', ()=> {

    if(changeToPlay.classList.contains('fa-play')) {
        audioElement.play();
        changeToPlay.classList.add('fa-pause');
        changeToPlay.classList.remove('fa-play');
        imageForChange.classList.add('show-cover-image', 'background-image');
        
    } else {
        audioElement.pause();
        changeToPlay.classList.add('fa-play');
        changeToPlay.classList.remove('fa-pause');
        imageForChange.classList.remove('show-cover-image', 'background-image');
    };

});

const skipForward = document.querySelector('.js-skip-forward');
const skipBackward = document.querySelector('.js-skip-backward');

skipForward.addEventListener('click', forSkippingForward);
skipBackward.addEventListener('click', forSkippingBackward);

function forSkippingForward() {
    audioElement.currentTime += 10;
};

function forSkippingBackward() {
    audioElement.currentTime -=10;
    if (audioElement.currentTime <= 0) {
        audioElement.currentTime = 0;
    }
};




/*
1) select the js-pause button
2) then if clicked then only display theh album if not till then dont display it
3) and once paused then hide,
*/
        // audioElement.addEventListener('ended', repeat)
        
        // function repeat() {
        //     audioElement.currentTime = 0;
        //     audioElement.play();
        // };
        
        // for hiding the img by clicking playbutton and then again if paused.
        