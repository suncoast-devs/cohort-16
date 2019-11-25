import React from 'react'

import data from './data/baked-goods.json'

const BakedGoods = props => {
  // filter down the data object to only find this categories food
  const food = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  console.log(food)
  return (
    <div className={props.match.params.category}>
      <h1>Hello, you are on the {food.category} page!!!</h1>
      <ul>
        {food.treats.map(treat => {
          return (
            <li>
              <header>{treat.title}</header>
              <img src={treat.image} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BakedGoods
