import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: 'dark confidant' };

  onFormSubmit = event => {
    event.preventDefault();

    // this is calling the prop that was passed down from App.js
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="text-fields">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
