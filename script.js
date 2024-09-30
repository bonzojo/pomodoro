// Pomodoro Web App

/*

A simple 20 minute rundown timer.
Once the timer runs down. Triggers an alarm event

*/

var pomoAlarm = new Howl({
    src: ['digital-alarm.mp3']
  });

  pomoAlarm.play() // Audio file play trigger

  const timerBtn = document.getElementById('timerStart');

  timerBtn.addEventListener('click', pomoAlarm.play());