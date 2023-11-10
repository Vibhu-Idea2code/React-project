import React,{useEffect,useState} from 'react'

const Timer = () => {
    const [timer, settimer] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            settimer(timer => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <h1>stopwatch</h1>
      <p>current time is {timer}</p>
    </div>
  )
}

export default Timer
