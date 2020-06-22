let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer (seconds) {

  clearInterval(countdown);

  const now =Date.now();
  const then = now + seconds *1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(()=>{
    const secLeft = Math.round((then-Date.now())/1000);
    if(seconds < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secLeft);
  }, 1000);
}


function displayTimeLeft(second) {
  const min = Math.floor(second /60);
  const remainSecs = second % 60;
  const displayTime = `${min}:${remainSecs < 10 ? '0' : '' } ${remainSecs}`;
  document.title = displayTime;
  timerDisplay.textContent = displayTime;

}

function displayEndTime(timestamp) {
  const end =  new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be back: ${hour}:${min < 10 ? '0' : ''} ${min}`;
 /*  endTime.textContent = `Be back: ${hour > 12 ? hour-12: hour}:${min}`; */
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const mins = this.minutes.value;
  this.reset();

  timer(mins*60);

});