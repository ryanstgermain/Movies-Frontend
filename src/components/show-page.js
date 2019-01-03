import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ShowPage = (props) => {
    return (
        <div>
            <Link to="/Movies">
                <Button bsStyle="default" className="back-button">Back</Button>
            </Link>
            <h2 className="add-info">Shit</h2>
            <div className="show-info">
                <img src=""/>
                <h5>Title:</h5>
                <h5>Director:</h5>
                <h5>Year:</h5>
                <h5>My Rating:</h5>
            </div>
        </div>
    );
}

export default ShowPage;
