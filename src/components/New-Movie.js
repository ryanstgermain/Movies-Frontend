import React from 'react'
import '../style/App.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddMovie = (props) => {
    return (
        <div>
            <Link to='/Movies'>
                <Button bsStyle='default' className='back-button'>Back</Button>
            </Link>
            <h2 className='add-info'>Add a Movie</h2>
            <div className='add-movie'>
                <ul>
                    <h4>Title:</h4>
                    <h4>Director:</h4> 
                    <h4>Year:</h4> 
                    <h4>My Rating:</h4> 
                    <h4>Poster URL:</h4>
                </ul>
                <ul>
                    <input onChange={props.handleInput} type='text' name='title'></input>
                    <input onChange={props.handleInput} type='text' name='director'></input>
                    <input onChange={props.handleInput} type='text' name='year'></input>
                    <input onChange={props.handleInput} type='text' name='rating' min='1' max='5'></input>
                    <input onChange={props.handleInput} type='text' name='poster'></input>
                </ul>
            </div>
            <Link to={`${props.allInputted ? '/Movies' : '/New'}`}>
                <Button onClick={props.addMovie} bsStyle='default' className='add-button'>Add Movie</Button>
            </Link>
        </div>
    )
}

export default AddMovie
