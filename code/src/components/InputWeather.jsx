import React from 'react'
import { useWeather } from '../Context/Weather'

const InputWeather = (props) => {
    const weather=useWeather();
    console.log(weather)
  return (
   <input className='input-field' placeholder={props.placeholder} value={weather.value} onChange={(e)=> weather.setSearchCity(e.target.value)}/>
  )
}

export default InputWeather
