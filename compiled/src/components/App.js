import MovieList from './MovieList.js';
import movies from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: movies
      // console.log('movies', this.state);
    };
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
          { className: 'title' },
          React.createElement(
            'h2',
            null,
            'Movie List'
          )
        ),
        React.createElement(MovieList, { movies: this.state.movies })
      )
    );
  }
}

export default App;

// movies={window.movieData}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixzQkFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBa0I7QUFDaEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFDTixRQUFRQTtBQUN0QjtBQURhLEtBQWI7QUFFRDs7QUFFRE8sV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBWSxnQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFLLE1BQVIsRUFBZSxNQUFLLEdBQXBCO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFZLFlBQWpCO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBWSxPQUFqQjtBQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCLFNBREY7QUFHSSw0QkFBQyxTQUFELElBQVcsUUFBVSxLQUFLRCxLQUFMLENBQVdOLE1BQWhDO0FBSEo7QUFKRixLQURGO0FBWUQ7QUFwQitCOztBQXVCbEMsZUFBZUMsR0FBZjs7QUFFQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBtb3ZpZXMgZnJvbSAnLi4vZGF0YS9tb3ZpZURhdGEuanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHttb3ZpZXM6IG1vdmllc31cbiAgICAvLyBjb25zb2xlLmxvZygnbW92aWVzJywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGlkID0gXCJsb2dvXCIgaHJlZj1cIiNcIj5Nb3ZpUGxleDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCIuY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInRpdGxlXCI+PGgyPk1vdmllIExpc3Q8L2gyPjwvZGl2PlxuICAgICAgICAgICAgey8qIHBhc3NpbmcgaW4gdGhlIHByb3BzIHRvIHRoZSBtb3ZpZSBsaXN0ICovfVxuICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXMgPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbi8vIG1vdmllcz17d2luZG93Lm1vdmllRGF0YX0iXX0=