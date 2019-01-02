import React from 'react';
import '../style/App.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Movie from './Movie.js';

const Movies = (props) => {
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
