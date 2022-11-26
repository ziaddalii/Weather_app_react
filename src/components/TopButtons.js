import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
      {
        id:1,
        title:"London"
      },
      {
        id:2,
        title:"Cairo"
      },      {
        id:3,
        title:"New York"
      },      {
        id:4,
        title:"Tokyo"
      },      {
        id:5,
        title:"Paris"
      },
    ]
  return (
    <div className='d-flex align-items-center justify-content-around my-6' style={{cursor:"pointer"}}>
      {cities.map((city) => (
        <span className='text-white' 
        style={{fontSize:".80rem!important"}}
        key={city.id}
        onClick={() => setQuery({q: city.title})}
        >
        {city.title}</span>
      ) )}
    </div>
  )
}

export default TopButtons