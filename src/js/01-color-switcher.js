//Змінні
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.setAttribute('disabled', '');

const body = document.querySelector('body');

let intervalId = null;

//Слухачі подій
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

//Функції

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
}

function onStart() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  intervalId = setInterval(changeColor, 1000);
}

function onStop() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
}
