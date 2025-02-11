import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { sendRequest } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.js-form');
const input = document.querySelector('#input');
const list = document.querySelector('.gallery-list');

form.addEventListener('submit', submitForm);
input.addEventListener('focus', () => (input.style.borderColor = '#4e75ff'));
input.addEventListener('blur', () => (input.style.borderColor = ''));

function submitForm(event) {
  event.preventDefault();
  if (!input.value.trim()) {
    showMessage('Please enter the text');
    form.reset();
  } else {
    form.reset();
    sendRequest(input.value)
      .then(images => renderImages(images))
      .catch(() => showMessage('Sorry, an error occurred while loading'));
  }
}

function showMessage(message) {
  iziToast.show({
    message,
    position: 'topRight',
    iconUrl: './src/img/x.svg',
    backgroundColor: '#ef4040',
    titleColor: '#fff',
    messageColor: '#fff',
    progressBarColor: '#b51b1b',
    theme: 'dark',
    displayMode: 2,
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutLeft',
  });
}
