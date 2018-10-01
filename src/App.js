import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import SideBar from './components/sideBar'
import SearchResult from './components/searchResult.js'

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
            <div className="section-wrapper">
               <Header/>
               <SideBar/>
               <SearchResult/>
            </div>
      </div>
    );
  }
}

export default App;
