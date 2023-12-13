import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(5);

    const addCounter = () => {
        if (counter < 20){   
            setCounter(counter + 1);
        }
    }

    const minusCounter = () => {
        if (counter > 0){   
            setCounter(counter - 1);
        }
    }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={addCounter}>increament : {counter} </button>
        <button onClick={minusCounter}>decreament : {counter} </button>
        <hr/>
        <footer>{counter}</footer>
    </div>
  )
}

export default Counter