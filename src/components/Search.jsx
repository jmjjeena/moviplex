
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
            />
            <button className ="btn">Search</button>
          </div>
        )
    }
}

export default Search;