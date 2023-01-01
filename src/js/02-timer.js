import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// Змінні

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
startBtn.addEventListener('click', startTimer);

const daysValue = document.querySelector('span.value[data-days]');
const hoursValue = document.querySelector('span.value[data-hours]');
const minutesValue = document.querySelector('span.value[data-minutes]');
const secondsValue = document.querySelector('span.value[data-seconds]');
const input = document.querySelector('#datetime-picker');

let SELECTED_DATE = new Date().getTime();
let difTime = null;
let intervalId = null;

//Опції flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    SELECTED_DATE = selectedDates[0];
    if (SELECTED_DATE <= new Date().getTime()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      input.disabled = true;
      Notiflix.Notify.success('Good. Go ahead! Click Start button');
    }
  },
};

flatpickr('#datetime-picker', options);

//Функції

function startTimer() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    difTime = SELECTED_DATE - new Date().getTime();
    if (difTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(difTime);
      daysValue.textContent = addLeadingZero(days);
      hoursValue.textContent = addLeadingZero(hours);
      minutesValue.textContent = addLeadingZero(minutes);
      secondsValue.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
      Notiflix.Report.info(
        'The timer has finished',
        'Just pick a date in the future again',
        'Thanks for the info',
        function enableInput() {
          input.disabled = false;
        }
      );
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let result = value.toString().padStart(2, '0');
  return result;
}
