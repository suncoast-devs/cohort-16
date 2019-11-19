import React, { useState } from 'react'
import Team from './components/Team'

const App = () => {
  return (
    <>
      <h1>My Score Board</h1>
      <Team teamNumber="Cubs" />

      <Team teamNumber="1" />
      <Team teamNumber="2" />
    </>
  )
}

export default App
