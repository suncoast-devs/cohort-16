import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

import axios from 'axios'

const App = () => {
  const [expenses, setExpenses] = useState([])

  return (
    <>
      Expense Tracker
      <ul>
        {expenses.map(expense => {
          return <li>{expense.note}</li>
        })}
      </ul>
    </>
  )
}

export default App
