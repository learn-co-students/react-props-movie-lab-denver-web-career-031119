import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movies = movieData.map(movie => {
      return  <MovieCard {...movie} /> //this spread operator is taking the entire movie object and spreading it, dont need to do this whole <MovieCard title={movie.title} etc etc
        
    })
    return movies
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
