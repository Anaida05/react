// useState
import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const handleAdd =()=>{
        setCounter((prevCounter =>prevCounter+1))
    }
  return (
    <div>
        <h1>Counter</h1>
        <p>Count is :{counter}</p>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Counter