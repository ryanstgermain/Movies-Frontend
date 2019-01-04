import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';
import AddMovie from './components/new_movie.js';
import ShowMovies from './components/show-movie.js';
import EditMovies from './components/edit-info.js';
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
            rating: ""
        }
  }
    componentDidMount() {
        this.loadMovies()
  }
    oneMovieClick = (event) => {
        console.log('oneMovieClick')
    fetch(`http://localhost:3000/${event.target.id}`,)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
            movie: [response]
        })
      })
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
            <Route path="/EditPage" render={()=><EditMovies movies={this.state.movies}/>}/>
            <Route path="/Movies" render={()=><Movies oneMovieClick={this.oneMovieClick} deleteMovie={this.deleteMovie} movies={this.state.movies}/>}/>
        </div>
    );
  }
}

export default App;
