import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EditPage = (props) => {
        let movie = props.movie.map(movie => {
    return (
        <div key={`movie &{movie.id}`}>
            <Link to='/Movies'>
                <Button bsStyle='default' className='back-button'>Back</Button>
            </Link>
            <h2 className='add-info'>{movie.title}</h2>
            <div className='add-movie'>
                <img className='movie-poster' src={movie.poster}/>
                <ul>
                    <h4>Title:</h4>
                    <h4>Director:</h4> 
                    <h4>Year:</h4> 
                    <h4>My Rating:</h4> 
                    <h4>Poster URL:</h4>
                </ul>
                <ul>
                    <input onChange={props.handleInput} name='title' defaultValue={movie.title}></input>
                    <input onChange={props.handleInput} name='director' defaultValue={movie.director}></input>
                    <input onChange={props.handleInput} name='year' defaultValue={movie.year}></input>
                    <input onChange={props.handleInput} name='rating' defaultValue={movie.rating} min='1' max='5'></input>
                    <input onChange={props.handleInput} name='poster' defaultValue={movie.poster}></input>
                    <Link to={`${props.allInputted ? '/Movies' : '/Movies'}`}><Button onClick={props.editMovie} id={movie.id} bsStyle="default" className="edit-button">Edit Movie</Button></Link>
                </ul>
            </div>
        </div>
        );
    })
    return (
        <>
            <div>
                <div>{movie}</div>
            </div>
        </>
    )
}

export default EditPage;
