import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import Movie from './Movie'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5&query=' + this.props.params.movie
    $.getJSON(url, (nowPlayingData) => {
      this.setState ({
        movies: nowPlayingData.results
      })
      console.log(nowPlayingData.results)
    });  
  }

  render() {
    var moviePosters = [];
    this.state.movies.map((movie, index) =>{
      moviePosters.push(
        <Movie movie={movie} key={index} />
        )
    })
    console.log(moviePosters)
    return (
      <div className="App">
        <div>
          {moviePosters}
        </div>
      </div>
    );
  }
}

export default App;
