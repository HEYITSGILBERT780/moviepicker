import React, {Component} from 'react';
import MovieFilter from './MovieFilter';
// import Movies from './Movies';

class MovieDisplay extends Component {
    render() {
        return (
            <div>
                <h1>MoviePicker</h1>
                <MovieFilter />
            </div>
        )
    }
}

export default MovieDisplay;