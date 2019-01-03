import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NewMovie = () => {
    return (
        <div className="buttons">
            <Link to="/New">
                <Button bsStyle="default" className="button-style">New Movie</Button>
            </Link>
            <a href="/" className="back-button">Back</a>
        </div>
    );
}

export default NewMovie;
