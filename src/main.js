import { getImagesByQuery } from './js/pixabay-api';
import './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const list = document.querySelector('.gallery-list');

form.addEventListener('submit', onClickBtn);
// list.insertAdjacentHTML('beforeend', createGallery);

function onClickBtn(event) {
  event.preventDefault();

  const inputValue = event.target.elements['search-text'].value;

  clearGallery();
  showLoader();
  getImagesByQuery(inputValue)
    .then(arr => {
      if (arr.length === 0) {
        clearGallery();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const markup = arr.map(item => createGallery(item)).join('');
      list.innerHTML = markup;
      lightbox.refresh();
    })
    .catch()
    .finally(() => hideLoader());

  form.reset();
}
