// Pomodoro Web App
  
// Initialize sound
var pomoAlarm = new Howl({
    src: ['digital-alarm.mp3']
});


const timerBtn = document.getElementById('timerStart');
const timerDisplay = document.querySelector('.timer');

let countdown; // For storing setInterval
let timeLeft = 1 * 60;

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

// Countdown
function startTimer() {
    // Prevent multiple intervals
    if (countdown) return;

    countdown = setInterval(function() {

        timeLeft--;

        displayTimeLeft(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            pomoAlarm.play();
        }
    }, 1000);
}

// Start timer
timerBtn.addEventListener('click', startTimer);
