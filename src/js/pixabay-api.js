import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '54643656-39fbeee4a4754ff685e869119';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

export function getImagesByQuery(query = '') {
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
    .then(response => {
      return response.data.hits;
    })
    .catch(error =>
      iziToast.error({
        message: 'Sorry, we have a problem. Please try again!',
        position: 'topRight',
      })
    );
}
