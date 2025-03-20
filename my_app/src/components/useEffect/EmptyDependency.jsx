import React, { useEffect, useState } from 'react'

const EmptyDependency = () => {
    const [count,setCount] = useState(0);
    function handleCount(){
        setCount((prev)=>prev+1)
    }
    useEffect(()=>{console.log("hii from empty dependency")},[])
  return (
    <div>
        <h1>EmptyDependency</h1>
        <p>Count:{count}</p>
        <button onClick={handleCount}>+</button>
    </div>
  )
}

export default EmptyDependency