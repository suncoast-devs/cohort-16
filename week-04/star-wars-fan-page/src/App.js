import React, { Component } from 'react'

import obiWanPicture from './images/obi-wan.jpeg'
import ackarPicture from './images/ackbar.jpeg'
import chewie from './images/chewie.jpeg'

import Character from './components/Character'

const App = () => {
  return (
    <>
      <header>
        <h1>I love Star Wars!</h1>
      </header>
      <main>
        <ul>
          <Character
            image={obiWanPicture}
            name="Obi-wan"
            tagline="Use the force"
          />
          <Character
            image={chewie}
            name="Chewie"
            tagline="Raaarrrrrr rarrrr!"
          />
          <Character image={ackarPicture} name="Ackbar" tagline="Its a trap" />
        </ul>
      </main>
    </>
  )
}

export default App
