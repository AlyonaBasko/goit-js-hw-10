import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateInput = document.querySelector('input[name="state"]:checked');
  
  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise.then(
    (delay) => {
      iziToast.success({
        borderRadius: '4px',
        backgroundColor: '#59a10d',
        message: `✅ Notification created after ${delay}ms`,
        position: 'topRight'
      });
    },
    (delay) => {
      iziToast.error({
        borderRadius: '4px',
        backgroundColor: '#ef4040',
        message: `❌ Notification failed after ${delay}ms`,
        position: 'topRight'
      });
    }
  );
}