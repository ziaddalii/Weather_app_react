import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const handleSearchClick = ()=>{
    if (city !== '') setQuery({q: city})
  }

  const handleLocationClick = () =>{
    if (navigator.geolocation){
      toast.info("Fetching user's location")
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        })
      })
    }
  }

  const handleUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.id
    if(units !== selectedUnit) setUnits(selectedUnit)
  }
  return (
    <div className='d-flex justify-content-center my-6'>
        <div className='d-flex w-75 flex-row justify-content-center align-items-center p-4' >
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)}
            type="text" placeholder='Search for city...' className="m-0 search-input h6 font-light p-2 mx-2 " style={{fontSize:".8rem", width:"80%", outline:'none', borderRadius: '10px', border:"none"}}/>
            <i className="input-icons fa fa-search text-white font-light mx-2" style={{fontSize:"16px", cursor:"pointer"}} aria-hidden="true"
            onClick={handleSearchClick}
            ></i>
            <i className="input-icons fa-light fas fa-map-marker-alt text-white font-light mx-2 " style={{fontSize:"16px", cursor:"pointer"}} aria-hidden="true"
            onClick={handleLocationClick}
            ></i>
        </div>
        <div className="d-flex flex-row w-25 justify-content-center align-items-center">
            <p id='metric' className='input-icons btn text-white font-light my-0 units' style={{fontSize:"16px"}} 
            onClick={handleUnitsChange}>°C</p>
            <p className='text-white mx-1 my-0' style={{fontSize:"16px"}}>|</p>
            <p id='imperial' className=' input-icons btn text-white font-light my-0 units' style={{fontSize:"16px"}}
            onClick={handleUnitsChange}>°F</p>
        </div>
    </div>
  )
}

export default Inputs