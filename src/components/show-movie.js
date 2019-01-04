import React from 'react';
import '../style/App.css';
import ShowPage from './show-page.js';

const ShowMovies = (props) => {
    console.log(props)
    const movieInfo = props.movies.map((movie, index, arr) => {
        return (<ShowPage key={index} pants={movie}/>)
    })
    return (
        <div>
            {movieInfo}
        </div>
    );
}

export default ShowMovies;
