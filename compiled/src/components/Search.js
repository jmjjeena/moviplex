class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      { className: "search-bar" },
      React.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Search movies.."
        // calling the function
        , onChange: this.props.handleSearchChange
      }),
      React.createElement(
        "button",
        { className: "btn", onClick: this.props.handleSearchSubmit },
        "Search"
      )
    );
  }
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTZWFyY2hTdWJtaXQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLE1BQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2YsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0g7O0FBR0RDLFdBQVU7QUFDTixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVksWUFBakI7QUFDRTtBQUNFLG1CQUFXLGNBRGI7QUFFRSxjQUFPLE1BRlQ7QUFHRSxxQkFBYztBQUNkO0FBSkYsVUFLRSxVQUFZLEtBQUtGLEtBQUwsQ0FBV0c7QUFMekIsUUFERjtBQVFFO0FBQUE7QUFBQSxVQUFRLFdBQVcsS0FBbkIsRUFBeUIsU0FBVyxLQUFLSCxLQUFMLENBQVdJLGtCQUEvQztBQUFBO0FBQUE7QUFSRixLQURGO0FBWUg7QUFwQmdDOztBQXVCckMsZUFBZVIsTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBtb3ZpZXMuLlwiXG4gICAgICAgICAgICAgIC8vIGNhbGxpbmcgdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID1cImJ0blwiIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5oYW5kbGVTZWFyY2hTdWJtaXR9PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19