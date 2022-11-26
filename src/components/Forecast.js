import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function Forecast({title, items}) {
  return (
    <div className='m-auto' style={{width:"80%" , fontSize:".70rem"}}>
        <div className='d-flex align-items-center justify-content-start mt-6'>
            <p className='text-white m-0' style={{textTransform :"uppercase"}}>
            {title}
            </p>
        </div>
            <hr className='my-2' style={{borderTop: "1px solid rgba(255,255,255)"}}/>
        
        <div className='text-white d-flex flex-row align-items-center justify-content-between'>
            {items.map((item) =>(
                <div key={Math.random()}className='d-flex flex-column align-items-center justify-content-start'  style={{fontSize:".75rem"}}>
                    <p className='font-weight-light my-0'>
                        {item.title}
                    </p>
                    <img className="my-1" style={{width:"40%"}} src={iconUrlFromCode(item.icon)} alt=""/>
                     <p className='font-weight-normal'>{`${item.temp.toFixed()}`}°</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Forecast