import React, { Component } from 'react';
import { Container, Header, List } from "semantic-ui-react";
//import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Comment from './Comment/Comment';
import Item from './Item/Item';
import Menu from './Menu/Menu';

class App extends Component {
  state = {
    submissions : []
  }


  render() {
    return (
      <div className="App">
        <Menu />
        <Container text><Item /></Container>
        <Container text><Comment /></Container>
        
      </div>
    );
  }
}

export default App;
