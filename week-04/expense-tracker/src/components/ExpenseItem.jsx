import React from 'react'

const ExpenseItem = props => {
  return (
    <li>
      {props.note}, {props.amount}, {props.when}, {props.type}
    </li>
  )
}

export default ExpenseItem
