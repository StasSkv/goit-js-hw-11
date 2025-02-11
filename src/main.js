import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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
  const query = input.value.trim();
  if (!query) {
    showMessage('Please enter the text');
    form.reset();
  } else {
    form.reset();
    list.innerHTML = '';
    sendRequest(query)
      .then(images => renderImages(images))
      .catch(() =>
        showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        )
      );
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
    maxWidth: "400px" ,
  });
}

const lightBox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
