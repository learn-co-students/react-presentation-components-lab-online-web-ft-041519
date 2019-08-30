// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  render() {
    return (
      <div handleClick={this.props.onClick}>
        {this.state.mood}
      </div>
    )
  }

  onClick = (event) => {
    this.setState({
      mood: "sad"
    })
  }
}
