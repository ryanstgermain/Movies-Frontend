import React from 'react';
import '../style/App.css';
import { Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
        <div>
            <img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VECaP7gqeikcj1f1o/retro-movie-background_vicgywm9l__F0000.png" alt="movie"/>
            <Link to="/Movies" className="home-button">See Movies</Link>
        </div>
    );
  }
}
 
export default Home;
