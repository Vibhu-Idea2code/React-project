import React from 'react'

const ButtonWhether = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>{props.value}</button>
    
  )
}

export default ButtonWhether
