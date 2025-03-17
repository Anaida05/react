import React, { useState } from 'react'
import MemoChildCompo from './MemoChildCompo'
import "./memo.css"

const MemoFn = () => {
  const[counter,setCounter] = useState(1)
  const [counter2,setCounter2] = useState(100)
  return (
    <div className='memoParent'>
        <h1>Memo Example</h1>
        <p>Counter : {counter}</p>
        <button onClick={()=>(setCounter(counter + 1))}>+</button>
        <MemoChildCompo counter2 ={counter2} />
    </div>
  )
}

export default MemoFn