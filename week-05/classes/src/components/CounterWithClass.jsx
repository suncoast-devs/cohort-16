import React, { Component } from 'react'

export class CounterWithClass extends Component {
  // properties on this class that stores all the changing data
  state = {
    count: 0,
    name: '',
    lastClickedAt: new Date(),
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
      lastClickedAt: new Date(),
    })
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
      lastClickedAt: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Current Count : {this.state.count}</h1>
        <button onClick={this.updateCount}>ADD 1</button>
      </div>
    )
  }
}

export default CounterWithClass
