import React, { Component } from 'react';

export default class SearchBar extends Component {
  render(){
    return <input onChange={ e => this.props.searchMovie(e.target.value)} />;
  }
}
