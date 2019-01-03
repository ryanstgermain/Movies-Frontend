import React from 'react';
import '../style/App.css';
import { Button } from 'react-bootstrap';

const NewMovie = () => {
    return (
        <div className="buttons">
            <Button bsStyle="default" className="button-style">New Movie</Button>
            <a href="/" className="back-button">Back</a>
        </div>
    );
}

export default NewMovie;
