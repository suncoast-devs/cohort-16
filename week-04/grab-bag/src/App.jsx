import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
  const [bag, setBag] = useState([])
  const [itemToAdd, setItemToAdd] = useState('')
  const [randomIndex, setRandomIndex] = useState()

  const addNewItemToArray = () => {
    // this will take the current value of itemtoAdd
    // add it to bag

    // we need to create a  new array because the items in state
    // are immuntable and so we need to creat a new array and replace the old with the newone

    // ideas:
    // map?
    // const newBag = bag.map(item => {
    //   return item
    // })
    // newBag.push(itemToAdd)
    // setBag(newBag)

    // const newArray = []
    // for (let i = 0; i < bag.length; i++) {
    //   newArray.push(bag[i])
    // }

    // const newArray2 = [...bag]

    setBag([...bag, itemToAdd])
    setItemToAdd('')

    // create a new and push each
  }

  const selectItemAtRandom = () => {
    const random = Math.floor(Math.random() * bag.length)
    console.log(random)
    setRandomIndex(random)
  }

  return (
    <>
      <section>
        <input
          type="text"
          value={itemToAdd}
          onChange={e => {
            setItemToAdd(e.target.value)
          }}
        />
        <button onClick={addNewItemToArray}>ADD</button>
        <button onClick={selectItemAtRandom}>pick</button>
      </section>
      <ul>
        {bag.map((item, index) => {
          // if (randomIndex === index) {
          //   return <li className="highlighted">{item}</li>
          // } else {
          //   return <li>{item}</li>
          // }
          // return randomIndex === index ? (
          //   <li className="highlighted">{item}</li>
          // ) : (
          //   <li>{item}</li>
          // )
          return (
            <li
              key={index}
              className={randomIndex === index ? 'highlighted' : ''}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default App
