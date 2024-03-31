import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
const delayInput = document.getElementById('delay');
const successRadio = document.getElementById('success');
const failureRadio = document.getElementById('failure');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const delay = parseInt(delayInput.value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (successRadio.checked) {
        resolve(delay);
      } else if (failureRadio.checked) {
        reject(delay);
      }
    }, delay);
  });

  promise.then(
    (delay) => {
      iziToast.success({ message: `✅ ${successRadio.value} notification in ${delay}ms` });
    },
    (delay) => {
      iziToast.error({ message: `❌ ${failureRadio.value} notification in ${delay}ms` });
    }
  );
}