import React, { Component } from 'react'
import Color from './Color'

export class ClassExample extends Component {
  state = {
    favoriteColor: 'black',
    allPossibleColors: ['black', 'red', 'blue', 'white', 'purple'],
  }
  updateColor = () => {
    console.log('button was cliiicked')

    this.setState({
      favoriteColor: 'red',
      updatedAt: new Date(),
    })
  }

  componentDidMount() {
    console.log('mounted on the page')
  }
  //componentDidMount can be replaced (usually) with:
  /**
   *
   * useEffect(() => {},[])
   *
   */

  render() {
    console.log('rendering the page')
    return (
      <div>
        <h1>hello world!</h1>
        <h2>My Favorite color is {this.state.favoriteColor}</h2>
        <button onClick={this.updateColor}>pick random color</button>
        <header>All the possible colors:</header>
        <ul>
          {this.state.allPossibleColors.map(color => {
            return <Color key={color} color={color} />
          })}
        </ul>
        <header>Colors that contain the letter u:</header>
        <ul>
          {this.state.allPossibleColors
            .filter(color => {
              return color.includes('u')
            })
            .map(color => {
              return <li key={color}>{color}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default ClassExample
