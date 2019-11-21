import React, { useEffect, useState } from 'react'
import HelloWorld from './components/HelloWorld'
import Axios from 'axios'

const App = () => {
  const [gameId, setGameId] = useState()

  const createBoard = async () => {
    const resp = await Axios.post(
      'https://minesweeper-api.herokuapp.com/games',
      { difficulty: 2 }
    )
    console.log(resp.data)
    setGameId(resp.data.id)
    console.log(gameId)
  }

  useEffect(() => {
    createBoard()
  }, [])

  return (
    <>
      <h2>Hey, you are playing {gameId}!</h2>
    </>
  )
}

export default App
