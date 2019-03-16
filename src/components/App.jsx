import MovieList from './MovieList.js';
import movies from '../data/movieData.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {movies: movies}
    // console.log('movies', this.state);
  }

  render() {
    return (
      <div className = "main-container">
        <nav>
          <a id = "logo" href="#">MoviPlex</a>
        </nav>
        <div className = ".container">
          <div className = "title"><h2>Movie List</h2></div>
            {/* passing in the props to the movie list */}
            <MovieList movies = {this.state.movies}/>
          </div>
      </div>
    )
  }
}

export default App;

// movies={window.movieData}