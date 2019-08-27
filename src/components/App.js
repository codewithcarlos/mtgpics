import React from 'react';
import mtg from 'mtgsdk';
// const mtg = require('mtgsdk');
// import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // This is the callback function for the child component
  // 'onSubmit' for a Component, like SearchBar, can be called anything because not wrapped in JSX.
  // if wrapped in JSX onSubmit needs to be called onSubmit
  onSearchSubmit = async term => {
    // console.log(term);
    // Archangel Avacyn
    const response = await mtg.card.where({ name: term });
    console.log(response);
    // axios.get('https://api.magicthegathering.io/v1/cards').then(result => {
    //   console.log(result.data.cards);
    // });

    // const result = await axios.get('https://api.magicthegathering.io/v1/cards');

    // setState causes component to re-render
    this.setState({ images: response });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
