import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../main';

export function createGallery({
  likes,
  tags,
  views,
  downloads,
  comments,
  webformatURL,
  largeImageURL,
}) {
  return `
        <li>
          <a href="${webformatURL}"
            ><img src="${webformatURL}" alt="${tags}" />
            <div class="info">
              <div class="info-box">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
              </div>
              <div class="info-box">
                <span class="label">Views</span>
                <span class="value">${views}</span>
              </div>
              <div class="info-box">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
              </div>
              <div class="info-box">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
              </div>
            </div></a
          >
        </li>`;
}

list.insertAdjacentHTML('beforeend', createGallery);
