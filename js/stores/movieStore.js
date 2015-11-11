import $ from 'jquery';
import EventEmitter from 'events';

const URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
var movies = [];
class MovieStore extends EventEmitter {
  constructor(props){
    super(props);
    this.init();
  }

  init(){
    $.get(URL).then((response) => {
      return JSON.parse(response);
    }).then((response) => {
      movies = response.movies;
      this.emit('change');
    });
  }

  getMovies(){
    return movies;
  }

  filter(){
    movies = movies.filter((item) => {
      return item.year > 2000;
    });
  }

}
let MovieStoreInstance = new MovieStore();

export default MovieStoreInstance;