import React from 'react'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'

const Movie = (props) => {
    return (
       <div>
        <Table>
            <thead className='table-head'>
                <tr className='table-head'>
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
                    <Link to='/Show'>
                        <Button onClick={props.oneMovieClick} id={props.cats.id} bsStyle='default' className='table-buttons'>View Movie</Button>
                    </Link>
                    <Link to='/EditPage'>
                        <Button onClick={props.editMovieButton} id={props.cats.id} bsStyle='default' className='table-buttons'>Edit</Button>
                    </Link>
                </tr>
            </tbody>
        </Table>
        <Button onClick={props.deleteMovie} id={props.cats.id} bsStyle='default' className='table-buttons'>Delete Movie</Button>
    </div>
    )
}

export default Movie
