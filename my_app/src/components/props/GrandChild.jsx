import React from 'react'

const GrandChild = ({message}) => {
  return (
    <div style={{margin:"20px"}}>
        <h3>GrandChild</h3>
        <p style={{fontSize : "24px", fontFamily:"monospace", color:"blueviolet"}}>{message}</p>
    </div>
  )
}

export default GrandChild