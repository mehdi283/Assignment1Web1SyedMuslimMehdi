 // Wait until both pages are loaded HTML and CSS
document.addEventListener('DOMContentLoaded', function () {

    
const samples = document.querySelectorAll('.sample');

// Going to one of those sound buttons
samples.forEach(sample => {

        
// Adding a button of clicking event to each one
sample.addEventListener('click', function () {

           
// Adding a button of clicking event to each one
const soundId = this.getAttribute('data-sound');

        
const audioToPlay = document.getElementById(soundId);

// Pause any currently playing audio so that only one plays at a time
document.querySelectorAll('audio').forEach(audio => {
if (!audio.paused) {
audio.pause();         // Pauses the audio
audio.currentTime = 0; // Plays the audio from the start
}
});


// Plays the audio that matches the Button
if (audioToPlay) {
audioToPlay.play();
}

// Add a Button to CSS Active
this.classList.add('active');

// After 210 milliseconds stops the audio
setTimeout(() => {
this.classList.remove('active');
}, 210);
});
});
});
