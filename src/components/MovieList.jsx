import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) =>  (
  <div className = "movie-list">
    {props.movies.map((movie, i) => 
      <div className = "movie-container" key={i}>
        <MovieListEntry movie={movie.title}/>
      </div>)}
  </div>
)

export default MovieList;
