import React from 'react'

const Add = (props) => {
  const {countUp} = props

  return (
    <div>
      <button onClick = {countUp}>Plus One</button>
    </div>
  )
}

export default ADD