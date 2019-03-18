import Search from './Search.js';
import MovieList from './MovieList.js';
import movies from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      noMovies: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.filterMovies(e.target.value);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.filterMovies(e.target.value);
  }

  filterMovies(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    this.setState({ noMovies: false });
    if (searchTerm) {
      var searchedMovies = [];
      this.state.movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(searchTerm)) {
          searchedMovies.push(movie);
        }
      });
      this.setState({ movies: searchedMovies });
      if (searchedMovies.length === 0) {
        this.setState({ noMovies: true });
      }
    } else {
      this.setState({ movies: movies });
    }
  }

  render() {
    return React.createElement(
      'div',
      { className: 'main-container' },
      React.createElement(
        'nav',
        null,
        React.createElement(
          'a',
          { id: 'logo', href: '#' },
          'MoviPlex'
        )
      ),
      React.createElement(
        'div',
        { className: '.container' },
        React.createElement(
          'div',
          { className: 'search' },
          React.createElement(Search, {
            handleSearchChange: this.handleSearchChange,
            handleSearchSubmit: this.handleSearchSubmit
          })
        ),
        this.state.noMovies && React.createElement(
          'h6',
          { className: 'error-line' },
          'Sorry. We don\'t have this movie in the list!'
        ),
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            'h2',
            null,
            'Movie List'
          ),
          React.createElement(MovieList, { movies: this.state.movies })
        )
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwibW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJub01vdmllcyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImJpbmQiLCJoYW5kbGVTZWFyY2hTdWJtaXQiLCJlIiwiZmlsdGVyTW92aWVzIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaFRlcm0iLCJ0b0xvd2VyQ2FzZSIsInNldFN0YXRlIiwic2VhcmNoZWRNb3ZpZXMiLCJmb3JFYWNoIiwibW92aWUiLCJ0aXRsZSIsImluY2x1ZGVzIiwicHVzaCIsImxlbmd0aCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixzQkFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBa0I7QUFDaEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYTixjQUFRQSxNQURHO0FBRVhPLGdCQUFVO0FBRkMsS0FBYjtBQUlBLFNBQUtDLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCRCxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNEOztBQUVERCxxQkFBbUJHLENBQW5CLEVBQXNCO0FBQ3BCLFNBQUtDLFlBQUwsQ0FBa0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBM0I7QUFDRDs7QUFFREoscUJBQW1CQyxDQUFuQixFQUFzQjtBQUNwQkEsTUFBRUksY0FBRjtBQUNBLFNBQUtILFlBQUwsQ0FBa0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBM0I7QUFDRDs7QUFFREYsZUFBYUksVUFBYixFQUF5QjtBQUN2QkEsaUJBQWFBLFdBQVdDLFdBQVgsRUFBYjtBQUNBLFNBQUtDLFFBQUwsQ0FBYyxFQUFDWCxVQUFVLEtBQVgsRUFBZDtBQUNBLFFBQUdTLFVBQUgsRUFBZTtBQUNiLFVBQUlHLGlCQUFpQixFQUFyQjtBQUNBLFdBQUtiLEtBQUwsQ0FBV04sTUFBWCxDQUFrQm9CLE9BQWxCLENBQTBCQyxTQUFTO0FBQ2pDLFlBQUlBLE1BQU1DLEtBQU4sQ0FBWUwsV0FBWixHQUEwQk0sUUFBMUIsQ0FBbUNQLFVBQW5DLENBQUosRUFBb0Q7QUFDbERHLHlCQUFlSyxJQUFmLENBQW9CSCxLQUFwQjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFdBQUtILFFBQUwsQ0FBYyxFQUFDbEIsUUFBUW1CLGNBQVQsRUFBZDtBQUNBLFVBQUlBLGVBQWVNLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsYUFBS1AsUUFBTCxDQUFjLEVBQUNYLFVBQVUsSUFBWCxFQUFkO0FBQ0Q7QUFDRixLQVhELE1BV087QUFDTCxXQUFLVyxRQUFMLENBQWMsRUFBRWxCLFFBQVFBLE1BQVYsRUFBZDtBQUNDO0FBQ0o7O0FBRUQwQixXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFZLGdCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxZQUFHLElBQUssTUFBUixFQUFlLE1BQUssR0FBcEI7QUFBQTtBQUFBO0FBQUwsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFFRSw4QkFBQyxNQUFEO0FBQ0UsZ0NBQXNCLEtBQUtsQixrQkFEN0I7QUFFRSxnQ0FBc0IsS0FBS0U7QUFGN0I7QUFGRixTQURGO0FBUUcsYUFBS0osS0FBTCxDQUFXQyxRQUFYLElBQXVCO0FBQUE7QUFBQSxZQUFJLFdBQVksWUFBaEI7QUFBQTtBQUFBLFNBUjFCO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBWSxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLFNBQUQsSUFBVyxRQUFVLEtBQUtELEtBQUwsQ0FBV04sTUFBaEM7QUFGRjtBQVRGO0FBRkYsS0FERjtBQW1CRDtBQTNEK0I7O0FBOERsQyxlQUFlQyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgbW92aWVzIGZyb20gJy4uL2RhdGEvbW92aWVEYXRhLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IG1vdmllcyxcbiAgICAgIG5vTW92aWVzOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2hTdWJtaXQgPSB0aGlzLmhhbmRsZVNlYXJjaFN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUpIHtcbiAgICB0aGlzLmZpbHRlck1vdmllcyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaFN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZmlsdGVyTW92aWVzKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlck1vdmllcyhzZWFyY2hUZXJtKSB7XG4gICAgc2VhcmNoVGVybSA9IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtub01vdmllczogZmFsc2V9KVxuICAgIGlmKHNlYXJjaFRlcm0pIHtcbiAgICAgIHZhciBzZWFyY2hlZE1vdmllcyA9IFtdO1xuICAgICAgdGhpcy5zdGF0ZS5tb3ZpZXMuZm9yRWFjaChtb3ZpZSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pKSB7XG4gICAgICAgICAgc2VhcmNoZWRNb3ZpZXMucHVzaChtb3ZpZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHNlYXJjaGVkTW92aWVzfSlcbiAgICAgIGlmIChzZWFyY2hlZE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9Nb3ZpZXM6IHRydWV9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW92aWVzOiBtb3ZpZXN9KVxuICAgICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPG5hdj48YSBpZCA9IFwibG9nb1wiIGhyZWY9XCIjXCI+TW92aVBsZXg8L2E+PC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCIuY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICB7Lyogc2VuZGluZyB0aGUgZnVuY3Rpb24gKi99XG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgIGhhbmRsZVNlYXJjaENoYW5nZSA9IHt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoU3VibWl0ID0ge3RoaXMuaGFuZGxlU2VhcmNoU3VibWl0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ub01vdmllcyAmJiA8aDYgY2xhc3NOYW1lID0gXCJlcnJvci1saW5lXCI+U29ycnkuIFdlIGRvbid0IGhhdmUgdGhpcyBtb3ZpZSBpbiB0aGUgbGlzdCE8L2g2Pn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5Nb3ZpZSBMaXN0PC9oMj57LyogcGFzc2luZyBpbiB0aGUgcHJvcHMgdG8gdGhlIG1vdmllIGxpc3QgKi99XG4gICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcyA9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=