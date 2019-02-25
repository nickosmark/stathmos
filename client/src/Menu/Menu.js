import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>

        <Menu.Item position='right'
          name='Submit'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Submit
        </Menu.Item>

        <Menu.Item
          name='Sing-up'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item 
            name='Login' 
            active={activeItem === 'sign-in'} 
            onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu>
    )
  }
}
