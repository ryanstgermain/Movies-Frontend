import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Movie = (props) => {
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
                <Link to="/Show">
                    <tr>
                        <td>{props.cats.title}</td>
                        <td>{props.cats.director}</td>
                        <td>{props.cats.year}</td>
                        <td>{props.cats.rating}</td>
                        <Button bsStyle="default" className="table-buttons">Delete Movie</Button>
                        <Link to="/EditPage">
                            <Button bsStyle="default" className="table-buttons">Edit</Button>
                        </Link>
                    </tr>
                </Link>
            </tbody>
        </Table>
    )
}

export default Movie;
