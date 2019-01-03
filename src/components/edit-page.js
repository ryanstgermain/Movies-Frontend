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
            <h2 className="add-info">Movie title goes here</h2>
            <div className="add-movie">
                <img className="movie-poster" src="https://sspride.org/wp-content/uploads/2017/03/image-placeholder-500x500.jpg"/>
                <ul>
                    <h4>Title:</h4>
                    <h4>Director:</h4> 
                    <h4>Year:</h4> 
                    <h4>My Rating:</h4> 
                    <h4>Poster URL:</h4>
                </ul>
                <ul>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <Button bsStyle="default" className="edit-button">Edit Movie</Button>
                </ul>
            </div>
        </div>
    );
}

export default EditPage;
