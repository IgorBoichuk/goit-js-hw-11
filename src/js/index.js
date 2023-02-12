import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  fetchAnimals(event);
});

function fetchAnimals(animals) {
  const myApiKey = '33589434-498505a5cafca5b4759d2d286';

  return fetch(
    `https://pixabay.com/api/?key=${myApiKey}&q=yellow+flowers&image_type=photo`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
