import MovieList from './MovieList.js';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      { className: "main-container" },
      React.createElement(
        "nav",
        null,
        React.createElement(
          "a",
          { id: "logo", href: "#" },
          "MoviPlex"
        )
      ),
      React.createElement(
        "div",
        { className: "movie-list" },
        React.createElement(MovieList, null)
      )
    );
  }
}

export default App;

// movies={window.movieData}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBWSxnQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFLLE1BQVIsRUFBZSxNQUFLLEdBQXBCO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFZLFlBQWpCO0FBRUUsNEJBQUMsU0FBRDtBQUZGO0FBSkYsS0FERjtBQVdEO0FBakIrQjs7QUFvQmxDLGVBQWVMLEdBQWY7O0FBRUEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBpZCA9IFwibG9nb1wiIGhyZWY9XCIjXCI+TW92aVBsZXg8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibW92aWUtbGlzdFwiPlxuICAgICAgICAgIHsvKiBwYXNzaW5nIGluIHRoZSBwcm9wcyB0byB0aGUgbW92aWUgbGlzdCAqL31cbiAgICAgICAgICA8TW92aWVMaXN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuLy8gbW92aWVzPXt3aW5kb3cubW92aWVEYXRhfSJdfQ==