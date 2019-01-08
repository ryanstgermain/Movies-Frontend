import React from 'react'
import '../style/App.css'
import EditPage from './edit-page.js'

const EditMovies = (props) => {
    const movieInfo = props.movies.map((movie, index) => {
        return (<EditPage editMovie={props.editMovie} key={index} pants={movie}/>)
    })
    return (
        <div>
            {movieInfo}
        </div>
    )
}

export default EditMovies
