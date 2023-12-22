import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const form = document.querySelector('.form');
const stateRadios = document.querySelectorAll('input[name="state"]');
if (stateRadios.length > 0) stateRadios[0].checked = true;

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const stateValue = form.querySelector('input[name="state"]:checked').value;
  const delay = form.delay.value;

  const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        fulfill(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(fulfill).catch(reject);
}



function fulfill(delay) {
  iziToast.show({
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#fafafb',
    messageSize: '16px',
    backgroundColor: '#82C43C',
    position: 'topRight',
    closeOnEscape: true,
    close: true,
    icon: 'Icomoon',
    
    iconColor: '#fafafb',
  }); 
  form.reset();
}

function reject(delay) {
  iziToast.show({
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#fafafb',
    messageSize: '16px',
    backgroundColor: '#fc5a5a',
    position: 'topRight',
    closeOnEscape: false,
    close: true,
    icon: 'Icomoon',
   
    iconColor: '#fafafb',
  }); 
  form.reset();
}



