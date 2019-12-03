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

  const calculateResult = () => {
    // // based on the operand,
    // if (operand === '+') {
    //   // add the numbers
    // } else if (operand === '-') {
    //   // subtract the numbers
    // } else if (operand === '*') {
    //   // multiply the numbers
    // } else if (operand === '/') {
    //   // divide the numbers
    // }
    let total = 0
    switch (operand) {
      case '+':
        // add the numbers
        total = parseInt(firstNumber) + parseInt(display)
        break
      case '-':
        // substract the numbers
        total = parseInt(firstNumber) - parseInt(display)
        break
      case '*':
        // mult the numbers
        total = parseInt(firstNumber) * parseInt(display)
        break
      case '/':
        // divide the numbers
        total = parseInt(firstNumber) / parseInt(display)
        break
    }
    setDisplay(total)
    // total = firstNumber (operand) display
  }

  const clearButton = () => {
    setDisplay('')
    setFirstNumber(0)
    setOperand('')
  }

  return (
    <main className="calculator">
      <section className="display">
        <p>{display}</p>
      </section>
      <section className="button-row">
        <button className="clear-button" onClick={clearButton}>
          clear
        </button>
        <button
          className="operator-button"
          onClick={() => operandButtonPressed('/')}
        >
          /
        </button>
      </section>
      <section className="button-row">
        <button onClick={() => numberButtonPressed(7)}>7</button>
        <button onClick={() => numberButtonPressed(8)}>8</button>
        <button onClick={() => numberButtonPressed(9)}>9</button>
        <button
          className="operator-button"
          onClick={() => operandButtonPressed('*')}
        >
          *
        </button>
      </section>
      <section className="button-row">
        <button onClick={() => numberButtonPressed(4)}>4</button>
        <button onClick={() => numberButtonPressed(5)}>5</button>
        <button onClick={() => numberButtonPressed(6)}>6</button>
        <button
          className="operator-button"
          onClick={() => operandButtonPressed('-')}
        >
          -
        </button>
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

        <button className="operator-button equals" onClick={calculateResult}>
          =
        </button>
      </section>
    </main>
  )
}

export default Calculator
