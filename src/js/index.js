import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchAnimals } from './fetchAnimals';

const form = document.querySelector('.search-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  query = form.elements.searchQuery.value;
  console.log(query);

  fetchAnimals(query);
});
