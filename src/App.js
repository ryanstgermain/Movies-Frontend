import React, { Component } from 'react';
import Header from './components/header.js';
import NewMovie from './components/movie_button.js';
import Movies from './components/movies.js';
import './style/App.css';

class App extends Component {
  constructor(){
      super ()
        this.state = {
            movies: [],
            title: "",
            description: "",
            year: "",
            rating: ""
        }
  }
    componentDidMount() {
        fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((data => this.setState({ movies: data })));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NewMovie />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
