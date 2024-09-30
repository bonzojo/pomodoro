// Pomodoro Web App
console.log("Icons courtesy of icons8");

var pomoAlarm = new Howl({
    src: ['digital-alarm.mp3']
});


const timerBtn = document.getElementById('timerStart');
const pauseBtn = document.getElementById('timerPause');
const timerDisplay = document.querySelector('.timer');

let countdown;
let timeLeft = 1 * 60;
let isPaused = false; 

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function startTimer() {

    if (countdown) return;

    if (isPaused) {
        isPaused = false;
    }

    countdown = setInterval(function () {
        timeLeft--;
        displayTimeLeft(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdown = null;
            pomoAlarm.play();
        }
    }, 1000);
}

function pauseTimer() {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
        isPaused = true; 
    }
}

timerBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);

