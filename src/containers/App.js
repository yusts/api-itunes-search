import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header.js'
import Search from '../components/Search/Search.js'
import Footer from '../components/Footer/Footer.js';
import Songs from '../components/Songs/Songs.js';

class App extends Component{
  constructor(){
    super()
    this.state = {
      input: '',
      searchinfo: {},
      firstSong: 0,
      lastSong: 9
    }
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    let input = this.state.input.toUpperCase();
    if (input === "") input = " ";
    
    let url = `https://itunes.apple.com/search?term=${input}&entity=song`;
    fetch(url)
    .then(response => response.json())
    .then(response =>
      this.setState({
        searchinfo: response,
        firstSong: 0,
        lastSong: 9
      })
      )
    }

  handlePrevPage = () => {
    let firstSong = this.state.firstSong - 9;
    let lastSong = this.state.lastSong - 9;

    if (firstSong < 0) {
      firstSong = 0;
      lastSong = 9;
    }
    this.setState({
      firstSong,
      lastSong
    });
  };

  handleNextPage = () => {
    let firstSong = this.state.firstSong + 9;
    let lastSong = this.state.lastSong + 9;


    if (firstSong  >= this.state.searchinfo.length) {
      firstSong = this.state.firstSong;
      lastSong = this.state.lastSong;
    }
    this.setState({
      firstSong,
      lastSong
    });
  };

  render () {
    return (
      <div className="App">
        <Header />
        <Search  
          input={this.state.input}
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          />
        <Songs 
          songs={this.state.searchinfo}
          start={this.state.firstSong}
          end={this.state.lastSong}
          handlePrevPage={this.handlePrevPage}
          handleNextPage={this.handleNextPage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;