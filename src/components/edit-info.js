import React from 'react';
import '../style/App.css';
import EditPage from './edit-page.js';

const EditMovies = (props) => {
    console.log(props)
    const movieInfo = props.movies.map((movie, index, arr) => {
        return (<EditPage key={index} pants={movie}/>)
    })
    return (
        <div>
            {movieInfo}
        </div>
    );
}

export default EditMovies;
