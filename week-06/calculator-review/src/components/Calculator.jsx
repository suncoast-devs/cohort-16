import React, { useState, useEffect } from 'react'
import { userInfo } from 'os'
import { calculate } from 'specificity'

const Calculator = () => {
  const [operand, setOperand] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [runningTotal, setRunningTotal] = useState(0)
  const [clearOnNextClick, setClearOnNextClick] = useState(false)
  const numberButtonPressed = digit => {
    console.log(digit, 'was pressed')
    setDisplay(prevValue => {
      if (clearOnNextClick) {
        setClearOnNextClick(false)
        return digit.toString()
      } else {
        return prevValue + digit.toString()
      }
    })
  }

  const operandButtonPressed = op => {
    console.log(op, 'was pressed')
    setOperand(op)
    // storing the current of the display in its own state
    setFirstNumber(display)
    setClearOnNextClick(true)
    // reseting the dislay
    const rt = getResult(op)
    console.log({ rt })
    setRunningTotal(rt)
  }

  const getResult = operand => {
    let total = runningTotal
    console.log({ total, display, operand })
    switch (operand) {
      case '+':
        // add the numbers
        total += parseInt(display)
        break
      case '-':
        // substract the numbers
        total -= parseInt(display)
        break
      case '*':
        // mult the numbers
        total *= parseInt(display)
        break
      case '/':
        // divide the numbers
        total /= parseInt(display)
        break
    }
    return total
  }

  const calculateResult = () => {
    let total = getResult(operand)
    console.log({ total })
    setDisplay(total)
    setRunningTotal(total)
    // total = firstNumber (operand) display
  }

  const numberButtonPressed = digit => {
    setDisplay(prevValue => {
      if (clearOnNextClick) {
        setClearOnNextClick(false)
        return digit.toString()
      } else {
        return prevValue + digit.toString()
      }
    })
  }
  const operandButtonPressed = op => {
    setOperand(op)
    // storing the current of the display in its own state
    setClearOnNextClick(true)
    setRunningTotal(display)
  }
  const calculate = () => {
    console.log({ runningTotal, operand, display })
    const total = getResult(runningTotal, operand, display)
    setRunningTotal(total)
  }
  useEffect(() => {
    calculate()
  }, [shouldRunCalc])

  return (
    <main className="calculator">
      <em>{runningTotal}</em> <em>{operand}</em>
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

        <button
          className="operator-button equals"
          onClick={() => setShouldRunCalc(p => !p)}
        >
          =
        </button>
      </section>
    </main>
  )
}

export default Calculator
