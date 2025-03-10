import React from 'react'
import { use } from 'react';
import { useLocation } from 'react-router-dom'

const CurrentPage = () => {
    const location = useLocation();
    const {company,car,color} = location.state;
    // const {key} = useLocation()
    const key = location.key
    
    
  return (
    <div>
        <h1>location :{location.pathname}</h1>  {/* returns current url */}
        <p>State from Counter:{car}</p>
        <p>State from Counter:{company}</p>
        <p>State from Counter:{color}</p>  
        <p>Key property : {key}</p> 
    </div>
  )
}

export default CurrentPage