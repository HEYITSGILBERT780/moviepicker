import React, { Component } from 'react';
import MovieDisplay from './MovieDisplay';
import './MovieApp.css';

class MovieApp extends Component {
  render() {
    return (
      <div className="App">
        <MovieDisplay />
      </div>
    );
  }
}

export default MovieApp;
