import ReactDOM from 'react-dom';
import MovieList from './components/MovieList';

const URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";

ReactDOM.render(<MovieList  urlData={URL} />, document.getElementById('content'));