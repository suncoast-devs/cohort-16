import React from 'react'

const Calculator = () => {
  return (
    <main className="calculator">
      <section className="display">
        <p>display</p>
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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operator-button">+</button>
      </section>
      <section className="button-row">
        <button className="zero">0</button>

        <button className="operator-button equals">=</button>
      </section>
    </main>
  )
}

export default Calculator
