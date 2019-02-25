import React, { Component } from 'react'
import logo from '../logo.svg';
import { Menu } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={this.handleItemClick}
        >
          <img src={logo} />
          Pxyn News
        </Menu.Item>

        <Menu.Item position='right'
          name='Submit'
          active={activeItem === 'submit'}
          onClick={this.handleItemClick}
        >
          Submit
        </Menu.Item>

        <Menu.Item
          name='Sing-up'
          active={activeItem === 'sign-up'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item 
            name='Login' 
            active={activeItem === 'login'} 
            onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu>
    )
  }
}
