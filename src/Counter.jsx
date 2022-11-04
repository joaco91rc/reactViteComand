import React from 'react'
import PropTypes2 from 'prop-types'
import { useState } from 'react'



export const Counter = ({value2}) => {
  const [counter, setCounter  ] = useState(value2)
  const handleAdd = ()=>{
    setCounter(counter+1)
  }

  const handleSubstract = ()=> setCounter(counter-1);
  const handleReset = ()=> setCounter(value2);
  return (
    <>
    <h1>Counter</h1>
    <h2> {counter}</h2>
    <button onClick={ handleAdd }> +1</button>
    <button onClick={ handleSubstract }> -1</button>
    <button onClick={ handleReset }> Reset</button>
    </>
  )
}
Counter.propTypes ={
  value2: PropTypes2.number.isRequired,
  
}
