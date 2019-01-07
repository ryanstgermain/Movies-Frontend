import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';
import AddMovie from './components/new_movie.js';
import ShowMovies from './components/show-movie.js';
import EditPage from './components/edit-page.js';
import NewMovie from './components/movie_button.js';
import Movies from './components/movies.js';
import './style/App.css';

class App extends Component {
  constructor(){
      super ()
        this.state = {
            movies: [],
            movie: [],
            title: "",
            description: "",
            year: "",
            rating: "",
            poster: "",
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
    fetch(`http://localhost:3000/${event.target.id}`,)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
            movie: [response]
        })
      })
    }

    editMovieButton = (event) => {
        fetch(`http://localhost:3000/${event.target.id}`)
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
      fetch(`http://localhost:3000/${event.target.id}`, {
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
        fetch(`http://localhost:3000/${event.target.id}`, {
          method: 'DELETE',
        }).then(() => this.loadMovies())
      }
      
    loadMovies = () => {
        fetch('http://localhost:3000/')
          .then(result => result.json())
      .then((data => this.setState({ movies: data })));
    }
  render() {
    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/New" component={AddMovie} />
            <Route path="/Movies" component={NewMovie} />
            <Route path="/Show" render={()=><ShowMovies oneMovieClick={this.oneMovieClick} movie={this.state.movie}/>}/>
            <Route path="/EditPage" render={()=><EditPage handleInput={this.handleInput} editMovie={this.editMovie} movie={this.state.movie}/>}/>
            <Route path="/Movies" render={()=><Movies editMovie={this.editMovie} editMovieButton={this.editMovieButton} oneMovieClick={this.oneMovieClick} deleteMovie={this.deleteMovie} movies={this.state.movies}/>}/>
        </div>
    );
  }
}

export default App;
