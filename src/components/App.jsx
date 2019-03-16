import MovieList from './MovieList.js';
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "main-container">
        <nav>
          <a id = "logo" href="#">MoviPlex</a>
        </nav>
        <div className = "movie-list">
        <div className = "title"><h2>Movie List</h2></div>
          {/* passing in the props to the movie list */}
          <MovieList />
        </div>
      </div>
    )
  }
}

export default App;

// movies={window.movieData}