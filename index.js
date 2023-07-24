const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => { 
    let timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        buttonEl.disabled = false;
        return timerEl.innerHTML = `00:00:00`;
      }

      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secondsLeft = seconds % 60;

      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

      timerEl.innerHTML = `${hours}:${minutes}:${secondsLeft}`;
      seconds--;
      buttonEl.disabled = true
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});