import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  showLoader,
  renderGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onClickBtn);
// list.insertAdjacentHTML('beforeend', createGallery);

function onClickBtn(event) {
  event.preventDefault();

  const inputValue = event.target.elements['search-text'].value.trim();
  if (inputValue.length === 0) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(inputValue)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      renderGallery(images);
    })
    .catch(() => {
      iziToast.error({
        message: 'Sorry, we have a problem. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());

  form.reset();
}
