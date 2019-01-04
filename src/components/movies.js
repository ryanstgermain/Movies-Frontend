import React from 'react';
import '../style/App.css';
import Movie from './Movie.js';

const Movies = (props) => {
    console.log(props)
    const movieStuff = props.movies.map((movie, index, arr) => {
        return (<Movie key={index} cats={movie}/>)
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
