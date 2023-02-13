import axios from 'axios';

const myApiKey = '33589434-498505a5cafca5b4759d2d286';

async function fetchAnimals(query, perPage, page) {
  const url = `https://pixabay.com/api/?key=${myApiKey}&q=${query}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}&orientation=horizontal&safesearch=true`;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {}
}
export { fetchAnimals };

// -----------------------------------------------------------------------------------------------------------------
// function fetchAnimals(query) {
//   const myApiKey = '33589434-498505a5cafca5b4759d2d286';

//   return fetch(`https://pixabay.com/api/?key=${myApiKey}&q=${query}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // data - это мои элементы - по ним создать карточки по свойствам объекта
//       console.log(data);
//       // прописать ф-цию создания ДОМ элемента через (МАР смотреть документацию библиотеки)
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
// export { fetchAnimals };
// -----------------------------------------------------------------------------------------------------------------
// const body = document.querySelector('body');

// async function fetchAnimals(query) {
//   const myApiKey = '33589434-498505a5cafca5b4759d2d286';
//   const url = `https://pixabay.com/api/?key=${myApiKey}&q=${query}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   const html = data.hits
//     .map(elem => {
//       return `<img src='${elem.previewURL}'>`;
//     })
//     .join('');

//   console.log(html);
//   return html;

// }

// function appendHtml(html) {
//   document.querySelector('.gallery').insertAdjacentHTML('afterbegin', html);
// }
