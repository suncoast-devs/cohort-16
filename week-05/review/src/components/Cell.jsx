import React from 'react'

const Cell = prop => {
  console.log(prop.data)

  if (prop.data === '*') {
    return <>💣</>
  } else if (prop.data === 'F') {
    return <>🚩</>
  } else if (prop.data === '_') {
    return <>✨</>
  } else {
    return <>{prop.data}</>
  }
}

export default Cell
