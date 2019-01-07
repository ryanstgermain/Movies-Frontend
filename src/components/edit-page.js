import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EditPage = (props) => {
        let movie = props.movie.map(movie => {
        console.log(movie.title)
    return (
        <div key={`movie &{movie.id}`}>
            <Link to="/Movies">
                <Button bsStyle="default" className="back-button">Back</Button>
            </Link>
            <h2 className="add-info">{movie.title}</h2>
            <div className="add-movie">
                <img className="movie-poster" src={movie.poster}/>
                <ul>
                    <h4>Title:</h4>
                    <h4>Director:</h4> 
                    <h4>Year:</h4> 
                    <h4>My Rating:</h4> 
                    <h4>Poster URL:</h4>
                </ul>
                <ul>
                    <input placeholder={movie.title}></input>
                    <input placeholder={movie.director}></input>
                    <input placeholder={movie.year}></input>
                    <input placeholder={movie.rating}></input>
                    <input placeholder={movie.poster}></input>
                    <Button bsStyle="default" className="edit-button">Edit Movie</Button>
                </ul>
            </div>
        </div>
        );
    })
    return (
        <>
            <div>
                <div>{movie}</div>
            </div>
        </>
    )
}

export default EditPage;
