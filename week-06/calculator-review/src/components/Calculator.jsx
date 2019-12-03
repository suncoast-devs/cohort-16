import React, { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('')
  const [operand, setOperand] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const numberButtonPressed = digit => {
    console.log(digit, 'was pressed')
    setDisplay(prevValue => {
      return prevValue + digit.toString()
    })
  }

  const operandButtonPressed = op => {
    console.log(op, 'was pressed')
    setOperand(op)
    // storing the current of the display in its own state
    setFirstNumber(display)
    // reseting the dislay
    setDisplay('')
  }

  return (
    <main className="calculator">
      <section className="display">
        <p>{display}</p>
      </section>
      <section className="button-row">
        <button className="clear-button">clear</button>
        <button className="operator-button">/</button>
      </section>
      <section className="button-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator-button">*</button>
      </section>
      <section className="button-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operator-button">-</button>
      </section>
      <section className="button-row">
        <button onClick={() => numberButtonPressed(1)}>1</button>
        <button onClick={() => numberButtonPressed(2)}>2</button>
        <button onClick={() => numberButtonPressed(3)}>3</button>
        <button
          className="operator-button"
          onClick={() => operandButtonPressed('+')}
        >
          +
        </button>
      </section>
      <section className="button-row">
        <button className="zero" onClick={() => numberButtonPressed(0)}>
          0
        </button>

        <button className="operator-button equals">=</button>
      </section>
    </main>
  )
}

export default Calculator
