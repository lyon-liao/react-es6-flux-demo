
import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import Movie from './Movie';
import MovieStore from '../stores/movieStore';
import MovieListDispatcher from '../dispatcher/MovieListDispatcher';
class MovieList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: MovieStore.getMovies(),
      loaded: false,
    };
  }
  componentDidMount() {
    //让onload方法中的this始终指向MovieList
    MovieStore.on('change', this.onLoaded.bind(this));
  }
  //防止内存泄露
  componentWillUnmount() {
    MovieStore.removeListener('change', this.onLoaded);
  }

  onLoaded(){
    this.setState({
      movies: MovieStore.getMovies(),
      loaded: true,
    });
  }
  renderLoading(){
    return (
      <div>loading</div>
    );
  }
  renderList(){
    var movies = this.state.movies.map((movie) => {
      return (
        <Movie data={movie} key={movie.id}></Movie>
      );
    });

    return (
      <div>
        <button onClick={this.filter.bind(this)}> after 2000</button>
        {movies}
      </div>
    );
  }

  filter(){
    MovieListDispatcher.dispatch({
      actionType: 'MOVIE_FILTER'
    });
  }

  render(){
    if(!this.state.loaded) return this.renderLoading();
    return this.renderList();
  }
}

export default MovieList;
