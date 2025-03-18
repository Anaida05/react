import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [counter,setCounter] = useState(0);
    const message = "Hii from Parent Component"
    function add(){
        setCounter(counter + 1)
    }
  return (
    <div>
        <h1 style={{margin : "10px"}}>Parent</h1>
        <Child counter={counter} add={add} message = {message}/>
    </div>
  )
}

export default Parent