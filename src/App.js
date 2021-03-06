import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home.js'
import AddMovie from './components/New-Movie.js'
import ShowMovies from './components/Show-Movie.js'
import EditPage from './components/Edit-Page.js'
import NewMovie from './components/Movie-Button.js'
import Movies from './components/Movies.js'
import './style/App.css'

class App extends Component {
    constructor(){
        super ()
        this.state = {
            movies: [],
            movie: [],
            title: '',
            director: '',
            year: '',
            rating: '',
            poster: '',
            allInputted: false
        }
    }

    componentDidMount() {
        this.loadMovies()
    }

    handleInput = (event) => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
        if (this.state.title.length > 0 && this.state.director.length > 0 && this.state.poster.length > 0 && this.state.year.length > 0 && this.state.rating > 0) {
            this.setState({
                allInputted: true,
            })
        }
    }

    oneMovieClick = (event) => {
        fetch(`https://movie-ryanstgermain.herokuapp.com/${event.target.id}`,)
            .then(result => result.json()) 
            .then((response) => {
                this.setState({
                    movie: [response]
                })
            })
    }

    editMovieButton = (event) => {
        fetch(`https://movie-ryanstgermain.herokuapp.com/${event.target.id}`)
            .then(result => result.json())
            .then((response) => {
                this.setState({
                    movie: [response],
                    rating: response.rating,
                    title: response.title,
                    director: response.director,
                    poster: response.poster,
                    year: response.year,
                    allInputted: true
                })
            })
    }

    addMovie = (event) => {
        if (this.state.rating > 5 || this.state.rating < 0) {
            alert('The Rating Scale Is From 0-5')
        } else if (this.state.allInputted === true) {
            var newMovie = {
                title: this.state.title,
                director: this.state.director,
                year: this.state.year,
                rating: this.state.rating,
                poster: this.state.poster,
            }
            fetch('https://movie-ryanstgermain.herokuapp.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie)
            })
                .then(response => response.json())
                .then(() => this.loadMovies())
                .then((response) => {
                    this.setState({
                        allInputted: false,
                        title: '',
                        director: '',
                        year: undefined,
                        rating: undefined,
                        poster: '',
                    })
                })
        }
    }

    editMovie = (event) => {
        if (this.state.allInputted === false) {
            alert('Please Fill Out All Fields')
        }
        else if (this.state.rating > 5) {
            alert('Ratings must be 1-5')
        }
        else {
            var updatedMovie = {
                title: this.state.title,
                director: this.state.director,
                rating: this.state.rating,
                poster: this.state.poster,
                year: this.state.year
            }
            fetch(`https://movie-ryanstgermain.herokuapp.com/${event.target.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMovie)
            }).then(response => response.json())
                .then(() => this.loadMovies()).then(() => {
                    this.setState({
                        reviewInputted: false,
                        rating: 0,
                        title: '',
                        director: '',
                        movie: [],
                        year: 0,
                        poster: ''
                    })
                })
    }
}

deleteMovie = (event) => {
    fetch(`https://movie-ryanstgermain.herokuapp.com/${event.target.id}`, {
        method: 'DELETE',
    }).then(() => this.loadMovies())
}

loadMovies = () => {
    fetch('https://movie-ryanstgermain.herokuapp.com/')
        .then(result => result.json())
        .then((data => this.setState({ movies: data })))
}

render() {
    return (
        <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/Movies' component={NewMovie} />
        <Route path='/New' render={()=><AddMovie handleInput={this.handleInput} addMovie={this.addMovie}/>}/>
        <Route path='/Show' render={()=><ShowMovies oneMovieClick={this.oneMovieClick} movie={this.state.movie}/>}/>
        <Route path='/EditPage' render={()=><EditPage handleInput={this.handleInput} editMovie={this.editMovie} movie={this.state.movie}/>}/>
        <Route path='/Movies' render={()=><Movies editMovie={this.editMovie} editMovieButton={this.editMovieButton} oneMovieClick={this.oneMovieClick} deleteMovie={this.deleteMovie} movies={this.state.movies}/>}/>
        </div>
    )
}
}

export default App
