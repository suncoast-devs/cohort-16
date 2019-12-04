import React, { Component } from 'react'

export class Color extends Component {
  componentDidMount() {
    console.log('color is mounting')
  }
  render() {
    return <li>{this.props.color}</li>
  }
}

export default Color
