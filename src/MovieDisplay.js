import React, {Component} from 'react';
import MovieFilter from './MovieFilter';
import Movies from './Movies';
import * as apiCall from './api';

class MovieDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        this.addMovie = this.addMovie.bind(this);
        this.clearMovies = this.clearMovies.bind(this);
    }

    clearMovies() {
        this.setState({movies: []});
    }

    async addMovie(val) {
        this.clearMovies();
        let url = await apiCall.createApiUrl(val);
        let newMovie = await apiCall.getMovie(url);
        console.log(newMovie);
        this.setState({movies: [...this.state.movies, newMovie]});
        console.log(url);
    }

    render() {
        const movies = this.state.movies.map((m) => (
            <Movies 
                key={m.id}
                {...m}
            />
        ));
        return (
            <div>
                <span className="title">
                    <h1>MoviePicker</h1>
                </span>
                <MovieFilter addMovie={this.addMovie}/>
                <ul>
                    {movies}
                </ul>
            </div>
        )
    }
}

export default MovieDisplay;