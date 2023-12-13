import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("blue");
    
  return (
    <div style={{backgroundColor : color}}>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("orange")}>Orange</button>
        <button onClick={() => setColor("grey")}>Grey</button>
        <button onClick={() => setColor("purple")}>Purple</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  )
}

export default BgChanger