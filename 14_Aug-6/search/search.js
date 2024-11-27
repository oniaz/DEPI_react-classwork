function searchMovie() {
  const title = document.getElementById('search-input').value;
  const resultElement = document
  fetch(`https://www.omdbapi.com/?apikey=f357aabe&s=${title}`)
    .then((res) => {
      return res.json();
    })
    .then(results => {
      // console.log(results);
      results.Search.forEach(movie => {
        console.log(movie.Title);
      });
    })
}
