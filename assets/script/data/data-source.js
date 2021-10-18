const api_key = "fb14a11dd7f5d4e9ad0ba55eb33a8d7c";
const baseUrl = "https://api.themoviedb.org/3/";

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${baseUrl}search/movie?api_key=${api_key}&query=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (keyword == "") {
          return Promise.reject(`Please insert your title movie`);
        }
        if (responseJson.total_results != 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Sorry, ${keyword} is not found or check your connection`);
        }
      });
  }
  static getPopular() {
    return fetch(`${baseUrl}movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
      })
      .catch(() => {
        throw "Please check your connection";
      });
  }
}

export default DataSource;
