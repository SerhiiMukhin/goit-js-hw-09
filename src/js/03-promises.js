import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(`${delayInput.value}`);
  const stepDelay = Number(`${stepInput.value}`);
  const promiseCount = Number(`${amountInput.value}`);
  
  let currentDelay = firstDelay;
  for (let i = 0; i < promiseCount; i += 1) {
    if (currentDelay !== 0) {
      currentDelay += stepDelay;
    }
    createPromise(i + 1, currentDelay);
  }
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        }
        else {
          reject({ position, delay });
        }
      }, delay);
    });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}