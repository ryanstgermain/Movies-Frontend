import React from 'react';
import '../style/App.css';
import Movie from './Movie.js';

const Movies = (props) => {
    const movieStuff = props.movies.map((movie, index) => {
        return (<Movie editMovie={props.editMovie} editMovieButton={props.editMovieButton} oneMovieClick={props.oneMovieClick} deleteMovie={props.deleteMovie} key={index} cats={movie}/>)
    })
    return (
        <div>
            <h2>All Movies</h2>
            <ul>
                {movieStuff}
            </ul>
        </div>
    );
}

export default Movies;
