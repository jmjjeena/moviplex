import Search from './Search.js';
import MovieList from './MovieList.js';
import movies from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: movies
      // console.log('movies', this.state);
      // this.changeState = this.changeState.bind(this);
    };
  }

  handleSearchInputChange() {
    alert('made it to changeState function!!!!!');
    // I need change Status
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
          React.createElement(Search, { handleSearchInputChange: this.handleSearchInputChange.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwibW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsImFsZXJ0IiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixzQkFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBa0I7QUFDaEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFDTixRQUFRQTtBQUN0QjtBQUNBO0FBRmEsS0FBYjtBQUdEOztBQUVETyw0QkFBMEI7QUFDeEJDLFVBQU0sc0NBQU47QUFDQTtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFZLGdCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQSxZQUFHLElBQUssTUFBUixFQUFlLE1BQUssR0FBcEI7QUFBQTtBQUFBO0FBQUwsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRSw4QkFBQyxNQUFELElBQVEseUJBQTJCLEtBQUtGLHVCQUFMLENBQTZCRyxJQUE3QixDQUFrQyxJQUFsQyxDQUFuQztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFZLE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsU0FBRCxJQUFXLFFBQVUsS0FBS0osS0FBTCxDQUFXTixNQUFoQztBQUZGO0FBSkY7QUFGRixLQURGO0FBY0Q7QUE1QitCOztBQStCbEMsZUFBZUMsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnO1xuaW1wb3J0IG1vdmllcyBmcm9tICcuLi9kYXRhL21vdmllRGF0YS5qcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge21vdmllczogbW92aWVzfVxuICAgIC8vIGNvbnNvbGUubG9nKCdtb3ZpZXMnLCB0aGlzLnN0YXRlKTtcbiAgICAvLyB0aGlzLmNoYW5nZVN0YXRlID0gdGhpcy5jaGFuZ2VTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UoKSB7XG4gICAgYWxlcnQoJ21hZGUgaXQgdG8gY2hhbmdlU3RhdGUgZnVuY3Rpb24hISEhIScpXG4gICAgLy8gSSBuZWVkIGNoYW5nZSBTdGF0dXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxuYXY+PGEgaWQgPSBcImxvZ29cIiBocmVmPVwiI1wiPk1vdmlQbGV4PC9hPjwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiLmNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlID0ge3RoaXMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGgyPk1vdmllIExpc3Q8L2gyPnsvKiBwYXNzaW5nIGluIHRoZSBwcm9wcyB0byB0aGUgbW92aWUgbGlzdCAqL31cbiAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzID0ge3RoaXMuc3RhdGUubW92aWVzfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==