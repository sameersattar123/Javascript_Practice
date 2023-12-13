import React from 'react'

const Card = ({username , btnText = "visit me"}) => {
  return (
    <div>
        <h1>{username}</h1>
        <button>{btnText}</button>
    </div>
  )
}

export default Card