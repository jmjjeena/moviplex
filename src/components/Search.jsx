class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render () {
        return (
          <div className = "search-bar">
            <input
              className ="form-control"
              type = "text"
              placeholder = "Search movies.."
              // calling the function
              onChange = {this.props.handleSearchChange}
            />
            <button className ="btn" onClick = {this.props.handleSearchSubmit}>Search</button>
          </div>
        )
    }
}

export default Search;