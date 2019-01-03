import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Movie = (props) => {
    const handleClick = movieId => {
        const requestOptions = {
            method: 'DELETE'
        };

    fetch("id" + movieId, requestOptions).then((response) => {
        return response.json();
    }).then((result) => {
    });
    }
    return (
        <Table>
            <thead className="table-head">
                <tr className="table-head">
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>My Rating</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.cats.title}</td>
                    <td>{props.cats.director}</td>
                    <td>{props.cats.year}</td>
                    <td>{props.cats.rating}</td>
                    <Link to="/Show">
                        <Button bsStyle="default" className="table-buttons">View Movie</Button>
                    </Link>
                    <Button onClick={() => { this.handleClick("id") }} bsStyle="default" className="table-buttons">Delete Movie</Button>
                    <Link to="/EditPage">
                        <Button bsStyle="default" className="table-buttons">Edit</Button>
                    </Link>
                </tr>
            </tbody>
        </Table>
    )
}

export default Movie;
