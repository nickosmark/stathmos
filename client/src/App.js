import React, { Component } from 'react';
import { Container, Header, List } from "semantic-ui-react";
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Comment from './Comment/Comment';
import Item from './Item/Item';
import Menu from './Menu/Menu';

class App extends Component {
  state = {
    persons : {name: "Max"}
  }

  nameChangedHandler = (event) =>{
    this.setState({persons: {name: event.target.value}});
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Container><Item /></Container>
        <Person name={this.state.persons.name} changeName={this.nameChangedHandler}></Person>
        <Container><Comment /></Container>
        
      </div>
    );
  }
}

export default App;
