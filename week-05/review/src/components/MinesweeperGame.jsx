import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { create } from 'istanbul-reports'
import Cell from './Cell'

const MinesweeperGame = () => {
  const [gameBoard, setGameBoard] = useState([])
  const [gameId, setGameId] = useState(0)

  const createGame = async diff => {
    const resp = await axios.post(
      'https://minesweeper-api.herokuapp.com/games',
      { difficulty: diff }
    )
    setGameBoard(resp.data.board)
    setGameId(resp.data.id)
  }

  const checkCell = async (x, y) => {
    const resp = await axios.post(
      `https://minesweeper-api.herokuapp.com/games/${gameId}/check`,
      { row: y, col: x }
    )
    setGameBoard(resp.data.board)
  }

  const flagCell = (x, y) => {}

  const handleLeftClick = (x, y) => {
    checkCell(x, y)
  }
  const handleRightClick = (e, x, y) => {
    e.preventDefault()
    flagCell(x, y)
  }

  useEffect(() => {
    createGame(1)
  }, [])

  return (
    <div>
      <section>
        <button
          onClick={() => {
            createGame(0)
          }}
        >
          EASY
        </button>
        <button
          onClick={() => {
            createGame(1)
          }}
        >
          MEDIUM
        </button>
        <button
          onClick={() => {
            createGame(2)
          }}
        >
          HARD
        </button>
      </section>
      <main>
        <table>
          <tbody>
            {gameBoard.map((row, y) => {
              return (
                <tr key={y}>
                  {row.map((col, x) => {
                    return (
                      <td
                        key={x}
                        onClick={() => handleLeftClick(x, y)}
                        onContextMenu={e => handleRightClick(e, x, y)}
                      >
                        <Cell data={col} />
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default MinesweeperGame
