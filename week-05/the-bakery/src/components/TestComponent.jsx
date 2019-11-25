import React from 'react'

const TestComponent = props => {
  console.log(props)
  return (
    <div>
      <h1>Hello, you are on the {props.match.params.category} page!!!</h1>
    </div>
  )
}

export default TestComponent
