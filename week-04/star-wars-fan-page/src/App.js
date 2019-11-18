import React, { Component } from 'react'

import obiWanPicture from './images/obi-wan.jpeg'
import ackarPicture from './images/ackbar.jpeg'
import chewie from './images/chewie.jpeg'

const App = () => {
  return (
    <>
      <header>
        <h1>I love Star Wars!</h1>
      </header>
      <main>
        <ul>
          <li>
            <img src={obiWanPicture} />
            <h2>Obi-wan</h2>
            <p>Use the force!</p>
          </li>
          <li>
            <img src={chewie} />
            <h2>Chewie</h2>
            <p>Raaarrrrrr rarrrr!</p>
          </li>
          <li>
            <img src={ackarPicture} />
            <h2>Ackbar</h2>
            <p>It's a trap!</p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
