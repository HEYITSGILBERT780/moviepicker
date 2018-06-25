import React from 'react';

const Movies = ({title, poster_path, overview}) => (
    <div className="flex-container individual-movie card">
            <h1>
                {title}
            </h1>
            <div className="img_wrap">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie"/>
                <p className="flex-container desc">{overview}</p>
            </div>
    </div>
);

export default Movies;