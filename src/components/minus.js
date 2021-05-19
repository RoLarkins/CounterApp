import React from 'react'

const Subtract = (props) => {
  const {countDown} = props

  return (
    <div>
      <button onClick = {countDown}>Minus One</button>
    </div>
  )
}

export default Subtract