import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render () {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.setState(event.target.value)} 
                    />
                <button onChange={}>Submit</button>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
