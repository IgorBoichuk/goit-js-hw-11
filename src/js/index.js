import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchAnimals } from './fetchAnimals';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');

let perPage = 40;
let page = 1;
let maxPage = 0;
let query = '';

form.addEventListener('submit', async event => {
  query = event.target.elements.searchQuery.value;
  event.preventDefault();

  inputFormValue = query.toLowerCase().trim();

  if (inputFormValue === '') {
    return;
  }
  const data = await fetchAnimals(query, perPage, page);
  console.log(data.hits);
  markupContent(data);
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
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
  gallery.insertAdjacentHTML('afterbegin', markup);
}
