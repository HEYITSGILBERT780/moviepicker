import React, {Component} from 'react';

class MovieFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            runtime: '',
            person: '',
            genre: [],
            rating: '',
            language: '',
            movieNum: 1
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.value;
        const name = target.name;

        if (target.type === 'checkbox') {
            this.setState({
                [name]: [...this.state.genre, value]
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit() {
        this.props.addMovie(this.state);
    }

    render() {
        return (
            <form>
                <h3>Movie Filter</h3>
                <label>
                    Release Year: 
                    <input
                        name="year"
                        type="text"
                        value={this.state.year}
                        placeholder="1996"
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Runtime: 
                    <input
                        name="runtime"
                        type="text"
                        value={this.state.runtime}
                        placeholder="In minutes"
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Actor/Actress: 
                    <input 
                        name="person"
                        type="text"
                        value={this.state.person}
                        placeholder="Seperate w/comma i.e. Brad Pitt, Alison Brie"
                        onChange={this.handleInputChange}
                    />
                </label>
                <h4>
                    Genre(you can pick more than one): 
                </h4>
                <label>
                    Action
                    <input 
                        name="genre"
                        type="checkbox"
                        value='28'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Adventure
                    <input 
                        name="genre"
                        type="checkbox"
                        value='12'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Animation
                    <input 
                        name="genre"
                        type="checkbox"
                        value='16'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Comedy
                    <input 
                        name="genre"
                        type="checkbox"
                        value='35'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Crime
                    <input 
                        name="genre"
                        type="checkbox"
                        value='80'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Documentary
                    <input 
                        name="genre"
                        type="checkbox"
                        value='99'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Drama
                    <input 
                        name="genre"
                        type="checkbox"
                        value='18'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Family
                    <input 
                        name="genre"
                        type="checkbox"
                        value='10751'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Fantasy
                    <input 
                        name="genre"
                        type="checkbox"
                        value='14'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    History
                    <input 
                        name="genre"
                        type="checkbox"
                        value='36'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Horror
                    <input 
                        name="genre"
                        type="checkbox"
                        value='27'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Music
                    <input 
                        name="genre"
                        type="checkbox"
                        value='10402'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Mystery
                    <input 
                        name="genre"
                        type="checkbox"
                        value='9648'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Romance
                    <input 
                        name="genre"
                        type="checkbox"
                        value='10749'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Science Fiction
                    <input 
                        name="genre"
                        type="checkbox"
                        value='878'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    TV Movie
                    <input 
                        name="genre"
                        type="checkbox"
                        value='10770'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Thriller
                    <input 
                        name="genre"
                        type="checkbox"
                        value='53'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    War
                    <input 
                        name="genre"
                        type="checkbox"
                        value='10752'
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Western
                    <input 
                        name="genre"
                        type="checkbox"
                        value='37'
                        onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Rating: 
                    <input 
                        name="rating"
                        type="text"
                        value={this.state.rating}
                        placeholder="8.2"
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Language:
                    <input
                        name="language"
                        type="text"
                        value={this.state.language}
                        placeholder="i.e. en for English, fr for French"
                        onChange={this.handleInputChange}
                    />
                </label>
                <h4>
                    Number of Movies to Display:
                </h4>
                <label>
                    1
                    <input
                        name="movieNum"
                        type="radio"
                        value="1"
                        checked={this.state.movieNum === 1}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    2
                    <input
                        name="movieNum"
                        type="radio"
                        value="2"
                        checked={this.state.movieNum === 2}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    3
                    <input
                        name="movieNum"
                        type="radio"
                        value="3"
                        checked={this.state.movieNum === 3}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <button onClick={this.handleSubmit}>Search</button>
            </form>
        )
    }
}

export default MovieFilter;