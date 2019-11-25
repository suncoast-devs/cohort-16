import React from 'react'

const CounterWithFunctions = () => {
  const [count, setCount] = useState(0)
  const [timeLastClicked, setTimeLastClicked] = useState(new Date())
  const [name, setName] = useState('')

  useEffect(() => {
    setTimeLastClicked(new Date())
  }, [count])

  const createIcon = cellValue => {
    if (cellValue === ' ') {
      return <i></i>
    }
    return (
      <>
        <h1>Something Cool!!!!</h1>
      </>
    )
  }

  return (
    <div>
      {CreateHtml()}
      <h1>Current Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD 1</button>
    </div>
  )
}

export default CounterWithFunctions
