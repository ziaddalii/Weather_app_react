import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TemperatureAndDetails({weather: {
  details, icon, temp, temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}
}) {
  return (
    <div className='m-auto' style={{width:"80%"}}>
      <div className='d-flex flex-row justify-content-center align-items-center py-6' style={{color:"rgba(0, 221, 255, 1)"}}>
        <p>{details}</p>
      </div>

      <div className='d-flex justify-content-between align-items-center text-white flex-row py-3'>
        <img className="w-20" src={iconUrlFromCode(icon)} style={{width:"10"}} alt=""/>
        <p className="my-0" style={{fontSize:"2.5rem"}}>{`${temp.toFixed()}°`}</p>
        <div className='d-flex flex-column y-2 justify-content-around'>
          <div className='d-flex font-weight-light justify-content-center align-items-center' style={{fontSize:".70rem"}}>
            <i className="fa fa-thermometer-half mr-1 px-6" aria-hidden="true"></i>
            <span className='mr-1 px-6'>Real feel</span>
            <span className='font-weight-bold'>{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className='d-flex font-weight-light justify-content-center align-items-center' style={{fontSize:".70rem"}}>
            <i className="fa fa-tint mr-1 px-6" aria-hidden="true"></i>
            <span className='mr-1 px-6'>Humidity</span>
            <span className='font-weight-bold'>{`${humidity.toFixed()}%`}</span>
          </div>

          <div className='d-flex font-weight-light justify-content-center align-items-center' style={{fontSize:".70rem"}}>
            <i className="fa fa-wind mr-1 px-6" aria-hidden="true"></i>
            <span className='mr-1 px-6'>Wind</span>
            <span className='font-weight-bold'>{`${speed.toFixed()}`} km/h</span>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row justify-content-center align-items-center text-white py-3' style={{fontSize:"75%"}}>
        <i className="fas fa-sun mr-2"></i>
        <p className='m-0 font-weight-light'>Rise: 
          <span className='font-weight-normal ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className='font-weight-light mx-2 my-0'>|</p>

        <i className="fas fa-sun mr-2"></i>
        <p className='m-0 font-weight-light'>Set: 
          <span className='font-weight-normal ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className='font-weight-light mx-2 my-0'>|</p>

        <i className="fas fa-arrow-up mr-2"></i>
        <p className='m-0 font-weight-light'>High: 
          <span className='font-weight-normal mx-1'>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className='font-weight-light mx-2 my-0'>|</p>

        <i className="fas fa-arrow-down mr-2"></i>
        <p className='m-0 font-weight-light'>Low: 
          <span className='font-weight-normal ml-1'>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  )
}

export default TemperatureAndDetails