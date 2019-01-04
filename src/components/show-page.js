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
            <h2 className="add-info">{props.pants.title}</h2>
            <div className="show-info">
                <img className="movie-poster" src={props.pants.poster}/>
                <h5>Director: {props.pants.director}</h5>
                <h5>Year Made: {props.pants.year}</h5>
                <h5>My Rating: {props.pants.rating}</h5>
            </div>
        </div>
    );
}

export default ShowPage;
