import React, { useState } from 'react'

const DigitalClock = () => {

    const [timex, setTimex] = useState('');

    const updateTimex = () =>{
       let  time = new Date().toLocaleTimeString()
        setTimex(time)
    }
    setInterval(updateTimex)

  return (
    <div className='container'>
    <h1>Digital Clock</h1>
    <div className="box">
        <h3 className="time">{timex}</h3>
    </div>
</div>
  )
}

export default DigitalClock