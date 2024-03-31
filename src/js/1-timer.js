import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputDatePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDifferenceDate(selectedDates[0]);
  },
};

const datetimePicker = flatpickr(inputDatePicker, options);

function currentDifferenceDate(selectedDate) {
  const currentDate = Date.now();
  startButton.disabled = selectedDate < currentDate;
  if (selectedDate < currentDate) {
    iziToast.error({message: 'Please choose a date in the future'});
  } else {
    inputDatePicker.disabled = true;
    startTimer(selectedDate - currentDate);
  }
}

function startTimer(duration) {
  let timer = duration / 1000;
  const intervalId = setInterval(function () {
    const days = Math.floor(timer / (3600 * 24));
    const hours = Math.floor((timer % (3600 * 24)) / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = Math.floor(timer % 60);
    renderDate(days, hours, minutes, seconds);
    if (--timer < 0) {
      clearInterval(intervalId);
      renderDate(0, 0, 0, 0);
      iziToast.success({message: 'Countdown finished!'});
      inputDatePicker.disabled = false;
    }
  }, 1000);
}

function renderDate(days, hours, minutes, seconds) {
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}