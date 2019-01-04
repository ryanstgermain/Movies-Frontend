import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EditPage = (props) => {
    return (
        <div>
            <Link to="/Movies">
                <Button bsStyle="default" className="back-button">Back</Button>
            </Link>
            <h2 className="add-info">{props.pants.title}</h2>
            <div className="add-movie">
                <img className="movie-poster" src={props.pants.poster}/>
                <ul>
                    <h4>Title:</h4>
                    <h4>Director:</h4> 
                    <h4>Year:</h4> 
                    <h4>My Rating:</h4> 
                    <h4>Poster URL:</h4>
                </ul>
                <ul>
                    <input placeholder={props.pants.title}></input>
                    <input placeholder={props.pants.director}></input>
                    <input placeholder={props.pants.year}></input>
                    <input placeholder={props.pants.rating}></input>
                    <input placeholder={props.pants.poster}></input>
                    <Button bsStyle="default" className="edit-button">Edit Movie</Button>
                </ul>
            </div>
        </div>
    );
}

export default EditPage;
