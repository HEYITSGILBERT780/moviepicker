import React from 'react';

const Movies = ({title, poster_path}) => (
    <div class="flex-container individual-movie card">
            <h1>
                {title}
            </h1>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie"/>
    </div>
);

export default Movies;