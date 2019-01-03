import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';
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
            <Route exact path="/" component={Home} />
            <Route path="/Movies" component={NewMovie}/>
            <Route path="/Movies" render={()=><Movies movies={this.state.movies}/>}/>
        </div>
    );
  }
}

export default App;
