import '../component/searchbar-component.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const listMovies = document.querySelector("#content");
  const input = document.querySelector("searchbar-component");

  const onBtnSearchClicked = () => {
    DataSource.searchMovie(input.value)
      .then(renderResult)
      .catch(fallbackResult)
  };

  const popularList = () => {
    DataSource.getPopular()
      .then(renderResult)
      .catch(fallbackResult)
  };

  const renderResult = results => {
    listMovies.innerHTML = "";
    results.slice(0, 9).forEach(movie => {
      const {title, release_date, vote_average, poster_path, overview} = movie;
      const picture = `https://image.tmdb.org/t/p/original${poster_path}`;
      const movies = document.createElement("article");
      movies.setAttribute("id", "movie");
      movies.setAttribute("class", "card");

      movies.innerHTML = `
        <h2>${title}</h2>
        <div class="info_container">
          <img class="movie_img" src="${picture}" alt="${title} picture"/>
          <div class="description">
            <table id="movie_info">
              <tr>
                <th>Release Date :</th>
                <td>${release_date}</td>
                <th>Rating :</th>
                <td>${vote_average}</td>
              </tr>
            </table>
            <p>${overview}</p>
          </div>
        </div>
      `;
      listMovies.appendChild(movies);
    });
  };

  const fallbackResult = message => {
    listMovies.innerHTML = "";
    listMovies.innerHTML += `<h3 class="not_found">${message}</h3>`;
  };

  input.clickEvent = onBtnSearchClicked;
  popularList();
};

export default main;