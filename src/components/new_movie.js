import React from 'react';
import '../style/App.css';
import { Button } from 'react-bootstrap';

const AddMovie = () => {
    return (
        <div>
            <h2>Add a Movie</h2>
            <div className='add-movie'>
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
                </ul>
            </div>
            <Button bsStyle="default" className="add-button">Add Movie</Button>
        </div>
    )
}

export default AddMovie;
