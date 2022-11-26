import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({ weather: {dt, timezone, name, country }}) {
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center my-6'>
            <p className='text-white font-weight-light'  style={{fontSize:".90rem"}}>
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>
        <div className='d-flex align-items-center justify-content-center my-6'>
            <p className='text-white font-weight-normal' style={{fontSize:"24px"}}>
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation