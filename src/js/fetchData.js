import axios from 'axios';

const myApiKey = '33589434-498505a5cafca5b4759d2d286';

async function fetchData(query, perPage, page) {
  const url = `https://pixabay.com/api/?key=${myApiKey}&q=${query}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}&orientation=horizontal&safesearch=true`;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {}
}
export { fetchData };
