import Search from './Search.js';
import MovieList from './MovieList.js';
import movies from '../data/movieData.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: movies,
      noMovies: false
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.filterMovies(e.target.value)
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.filterMovies(e.target.value);
  }

  filterMovies(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    this.setState({noMovies: false})
    if(searchTerm) {
      var searchedMovies = [];
      this.state.movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(searchTerm)) {
          searchedMovies.push(movie);
        }
      })
      this.setState({movies: searchedMovies})
      if (searchedMovies.length === 0) {
        this.setState({noMovies: true})
      }
    } else {
      this.setState({ movies: movies})
      }
  }

  render() {
    return (
      <div className = "main-container">
        <nav><a id = "logo" href="#">MoviPlex</a></nav>
        <div className = ".container">
          <div className="search">
          {/* sending the function */}
            <Search
              handleSearchChange = {this.handleSearchChange}
              handleSearchSubmit = {this.handleSearchSubmit}
            />
          </div>
          {this.state.noMovies && <h6 className = "error-line">Sorry. We don't have this movie in the list!</h6>}
          <div className = "title">
            <h2>Movie List</h2>{/* passing in the props to the movie list */}
            <MovieList movies = {this.state.movies}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
