import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ShowMovies = (props) => {
    return (
        props.movie.map(movie => {
    return (
        <div key={`movie ${movie.id}`}>
            <Link to="/Movies">
                <Button bsStyle="default" className="back-button">Back</Button>
            </Link>
            <h2 className="add-info">{movie.title}</h2>
            <div className="show-info">
                <img className="movie-poster" src={movie.poster}/>
                <h5>Director: {movie.director}</h5>
                <h5>Year Made: {movie.year}</h5>
                <h5>My Rating: {movie.rating}</h5>
            </div>
        </div>
        )
    })
)}

export default ShowMovies;
