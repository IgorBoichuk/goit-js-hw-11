import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchAnimals } from './fetchAnimals';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.loadMoreBtn');
loadMoreBtn.addEventListener('click', moreBtn);

let perPage = 12;
let page = 1;
let maxPage = 0;
let query = '';

form.addEventListener('submit', async event => {
  query = event.target.elements.searchQuery.value;
  event.preventDefault();
  removeItems();

  let inputFormValue = query.toLowerCase().trim();

  if (inputFormValue === '') {
    return;
  }
  fetchAnimals(query, perPage, page).then(checkSearchData);

  markupContent;
});

function markupContent(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
        <a class="gallery__item" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${downloads}</b>
          </p>
        </div>
      </div>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  let galleryLightbox = new SimpleLightbox('.photo-card a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
}

function removeItems() {
  page = 1;
  gallery.innerHTML = '';
}

function checkSearchData(search) {
  // console.log(search.total);
  const total = search.total;
  if (total > 0) {
    loadMoreBtn.classList.remove('hidden');

    Notiflix.Notify.success(`We have the ${total} pictures fo you!`);
    markupContent(search);
  }
  if (total <= 0) {
    loadMoreBtn.classList.add('hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    removeItems();
  }
}

function moreBtn() {
  page += 1;
  fetchAnimals(query, perPage, page).then(checkSearchData);
}
