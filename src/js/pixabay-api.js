import axios from 'axios';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGallery } from './render-functions';

const API_KEY = '54643656-39fbeee4a4754ff685e869119';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

function getImagesByQuery(query = '') {
  return axios
    .get('/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      izitoast.error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    });
}

getImagesByQuery('cat').then(arr => {
  const markup = arr.map(item => createGallery(item)).join('');
  return markup;
});
