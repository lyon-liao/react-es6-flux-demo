import {Dispatcher} from 'flux';
import MovieStore from '../stores/movieStore';

var MovieListDispatcher = new Dispatcher();

MovieListDispatcher.register(function(action){
  switch(action.actionType){
    case 'MOVIE_FILTER':
      MovieStore.filter();
      MovieStore.emit('change');
    default:
      //do nothing
  }
});

export default MovieListDispatcher;