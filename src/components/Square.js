import React from 'react'

function Square({value, clickHandler}) {
  
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button
      className = {style} 
      onClick={clickHandler}>
      {value}
    </button>
  )
}

export default Square
