
import React from 'react';
import ReactDOM from 'react-dom';


class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var movie = this.props.data;
    return (
      <div>
        <img src={movie.posters.thumbnail}/>
        <div>{movie.title}</div>
        <div>{movie.year}</div>
      </div>
    );
  }
}

export default Movie;
