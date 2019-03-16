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
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h2",
            null,
            "Movie List"
          )
        ),
        React.createElement(MovieList, null)
      )
    );
  }
}

export default App;

// movies={window.movieData}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBWSxnQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFLLE1BQVIsRUFBZSxNQUFLLEdBQXBCO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFZLFlBQWpCO0FBQ0E7QUFBQTtBQUFBLFlBQUssV0FBWSxPQUFqQjtBQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCLFNBREE7QUFHRSw0QkFBQyxTQUFEO0FBSEY7QUFKRixLQURGO0FBWUQ7QUFsQitCOztBQXFCbEMsZUFBZUwsR0FBZjs7QUFFQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGlkID0gXCJsb2dvXCIgaHJlZj1cIiNcIj5Nb3ZpUGxleDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtb3ZpZS1saXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0aXRsZVwiPjxoMj5Nb3ZpZSBMaXN0PC9oMj48L2Rpdj5cbiAgICAgICAgICB7LyogcGFzc2luZyBpbiB0aGUgcHJvcHMgdG8gdGhlIG1vdmllIGxpc3QgKi99XG4gICAgICAgICAgPE1vdmllTGlzdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbi8vIG1vdmllcz17d2luZG93Lm1vdmllRGF0YX0iXX0=