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
            movieNum: "1"
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
        for(let i = 0; i < this.state.movieNum; i++) {
            this.props.addMovie(this.state);
        }

        this.setState({
            year: '',
            runtime: '',
            person: '',
            genre: [],
            rating: '',
            language: '',
            movieNum: "1"
        });
    }

    render() {
        return (
            <div className="container">
                <div className="filter">
                    <h3>Movie Filter</h3>
                    <label htmlFor="mYear"><strong>Release Year: </strong></label>
                    <input
                        name="year"
                        id="mYear"
                        type="text"
                        value={this.state.year}
                        placeholder="1996"
                        onChange={this.handleInputChange}
                    />

                    <br />

                    <label htmlFor="mRun"><strong>Runtime: </strong></label>  
                    <input
                        name="runtime"
                        id="mRun"
                        type="text"
                        value={this.state.runtime}
                        placeholder="In minutes"
                        onChange={this.handleInputChange}
                    />

                    <br />

                    <label htmlFor="mPerson"><strong>Actor/Actress: </strong></label>  
                        <input 
                            name="person"
                            id="mPerson"
                            type="text"
                            value={this.state.person}
                            placeholder="Alison Brie"
                            onChange={this.handleInputChange}
                        />

                    <br />

                    <label htmlFor="mGenre"><strong>Genre: </strong></label>
                    <div id="mGenre">
                        <span className="sec">
                            <label>
                                <input 
                                        name="genre"
                                        type="checkbox"
                                        value='28'
                                        onChange={this.handleInputChange}
                                />
                            Action
                            </label>
                            
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='12'
                                    onChange={this.handleInputChange}
                                />
                            Adventure
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='16'
                                    onChange={this.handleInputChange}
                                />
                            Animation
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='35'
                                    onChange={this.handleInputChange}
                                />
                            Comedy
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='80'
                                    onChange={this.handleInputChange}
                                />
                            Crime
                            </label>
                        </span>

                        <span className="sec">
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='99'
                                    onChange={this.handleInputChange}
                                />
                            Documentary
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='18'
                                    onChange={this.handleInputChange}
                                />
                            Drama
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='10751'
                                    onChange={this.handleInputChange}
                                />
                            Family
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='14'
                                    onChange={this.handleInputChange}
                                />
                            Fantasy
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='36'
                                    onChange={this.handleInputChange}
                                />
                            History
                            </label>
                        </span>

                        <span className="sec">
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='27'
                                    onChange={this.handleInputChange}
                                />
                            Horror
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='10402'
                                    onChange={this.handleInputChange}
                                />
                            Music</label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='9648'
                                    onChange={this.handleInputChange}
                                />
                            Mystery
                            </label>

                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='10749'
                                    onChange={this.handleInputChange}
                                />
                            Romance
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='878'
                                    onChange={this.handleInputChange}
                                />
                            Science Fiction
                            </label>
                        </span>
                    
                        <span className="sec">
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='10770'
                                    onChange={this.handleInputChange}
                                />
                            TV Movie
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='53'
                                    onChange={this.handleInputChange}
                                />
                            Thriller
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='10752'
                                    onChange={this.handleInputChange}
                                />
                            War
                            </label>
                        
                            <label>
                                <input 
                                    name="genre"
                                    type="checkbox"
                                    value='37'
                                    onChange={this.handleInputChange}
                                />
                            Western
                            </label>
                        </span>
                    </div>

                    <br/>

                    <label htmlFor="mRating"><strong>Rating: </strong></label>
                    <input 
                        name="rating"
                        id="mRating"
                        type="text"
                        value={this.state.rating}
                        placeholder="8.2"
                        onChange={this.handleInputChange}
                    />

                    <br />

                    <label htmlFor="mLang"><strong>Language: </strong></label>
                    <input
                        name="language"
                        id="mLang"
                        type="text"
                        value={this.state.language}
                        placeholder="i.e. en for English"
                        onChange={this.handleInputChange}
                    />

                    <br />

                    <label htmlFor="numM"><strong>Number of Movies to Display: </strong></label>
                    <div id="numM">
                        <label htmlFor="num1">1</label>
                        <input
                            name="movieNum"
                            id="num1"
                            type="radio"
                            value="1"
                            checked={this.state.movieNum === "1"}
                            onChange={this.handleInputChange}
                        />
                    
                        <label htmlFor="num2">2</label>
                        <input
                            name="movieNum"
                            id="num2"
                            type="radio"
                            value="2"
                            checked={this.state.movieNum === "2"}
                            onChange={this.handleInputChange}
                        />
                    
                        <label htmlFor="num3">3</label>
                        <input
                            name="movieNum"
                            id="num3"
                            type="radio"
                            value="3"
                            checked={this.state.movieNum === "3"}
                            onChange={this.handleInputChange}
                        />                
                    </div>

                    <br />

                    <button onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
        )
    }
}

export default MovieFilter;