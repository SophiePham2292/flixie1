import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container} from 'bloomer';
import "bulma/css/bulma.css";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";


class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        movies: [],
        loading: true,
        movieNeed: [],
        searchWord: ""
      };
    }

    async componentDidMount(){
      const results = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed");
      const data = await results.json();
      this.movies = data.results;
      this.setState({
        movies: this.movies,
        loading: false,
        movieNeed: this.movies
      });
    }

    searchMovie(searchWord){
      this.setState({
        searchWord
      })
      let movieNeed = this.state.movies;
      movieNeed = movieNeed.filter(m =>{
        if(m.title.search(searchWord) !== -1) return true;
      })
      this.setState({
        movieNeed
      });
    }



    render() {
      let content;
      if (this.state.loading){ content = <h1> This is loading </h1> }
      else {
        content = <MoviesList movies={this.state.movieNeed}/>
      }


      return (
        <Container>
        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Flixie</h1>
            <SearchBar searchMovie={this.searchMovie.bind(this)}/>
          </header>

          <Container>
            {content}
          </Container>

        </div>
        </Container>
      );
    }
  }

export default App;
