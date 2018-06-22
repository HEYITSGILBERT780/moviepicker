import React from 'react';

const Movies = ({title, poster_path}) => (
    <div>
        <h1>
            {title}
        </h1>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie"/>
    </div>
);

export default Movies;