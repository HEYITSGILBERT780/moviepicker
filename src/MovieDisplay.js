import React, {Component} from 'react';
import MovieFilter from './MovieFilter';
import * as apiCall from './api';
// import Movies from './Movies';

class MovieDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        //this.addMovie = this.addMovie.bind(this);
    }

    async addMovie(val) {
        let url = await apiCall.createApiUrl(val);
        console.log(url);
    }

    render() {
        return (
            <div>
                <h1>MoviePicker</h1>
                <MovieFilter addMovie={this.addMovie}/>
            </div>
        )
    }
}

export default MovieDisplay;