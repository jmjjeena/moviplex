import Search from './Search.js';
import MovieList from './MovieList.js';
import movies from '../data/movieData.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {movies: movies}
    // console.log('movies', this.state);
    // this.changeState = this.changeState.bind(this);
  }

  handleSearchInputChange() {
    alert('made it to changeState function!!!!!')
    // I need change Status
  }

  render() {
    return (
      <div className = "main-container">
        <nav><a id = "logo" href="#">MoviPlex</a></nav>
        <div className = ".container">
          <div className="search">
            <Search handleSearchInputChange = {this.handleSearchInputChange.bind(this)}/>
          </div>
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
