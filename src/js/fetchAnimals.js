function fetchAnimals(query) {
  const myApiKey = '33589434-498505a5cafca5b4759d2d286';

  return fetch(`https://pixabay.com/api/?key=${myApiKey}&q=${query}`)
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

export { fetchAnimals };
