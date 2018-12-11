import React from 'react';
import '../style/App.css';
import { Button } from 'react-bootstrap';

const NewMovie = () => {
    return (
        <div>
            <Button bsStyle="default" className="button-style">New Movie</Button>
        </div>
    );
}

export default NewMovie;
