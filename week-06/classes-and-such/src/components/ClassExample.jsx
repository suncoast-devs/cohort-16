import React, { Component } from 'react'

export class ClassExample extends Component {
  state = {
    favoriteColor: 'black',
    allPossibleColors: ['black', 'red', 'blue', 'white', 'purple'],
  }

  render() {
    return (
      <div>
        <h1>hello world!</h1>
        <h2>My Favorite color is {this.state.favoriteColor}</h2>
        <header>All the possible colors:</header>
        <ul>
          {this.state.allPossibleColors.map(color => {
            return <li>{color}</li>
          })}
        </ul>
        <header>Colors that contain the letter u:</header>
        <ul>
          {this.state.allPossibleColors
            .filter(color => {
              return color.includes('u')
            })
            .map(color => {
              return <li>{color}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default ClassExample
