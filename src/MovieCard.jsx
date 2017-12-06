import React, { Component } from 'react';
import { Box } from 'bloomer';
import './MovieCard.css';

export default class MovieCard extends Component {
  render(){
    let imagePath = "https://image.tmdb.org/t/p/w500".concat(this.props.movie.poster_path);
    return <Box className="MovieCard-Box">
      <p> {this.props.movie.title}</p>
      <img src={imagePath} />
      <p> {this.props.movie.overview}</p>
    </Box>
  }
}
