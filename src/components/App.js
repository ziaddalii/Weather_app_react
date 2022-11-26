import React, { Component } from 'react';
import "./App.css";
import TopButtons from './TopButtons';
import Inputs from './Inputs';
import TimeAndLocation from './TimeAndLocation';
import TemperatureAndDetails from './TemperatureAndDetails';
import Forecast from './Forecast';
import getFormattedWeatherData from '../services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {


  const [query, setQuery] = useState({q: 'cairo'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location"

      toast.info("Fetching weather for " + message);


      await getFormattedWeatherData({...query,units}).then((data) => {
        
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country},`)
        setWeather(data);
      });
    };
    fetchWeather();
}, [query, units]);

  const formatBackground = () =>{
    if(!weather) return 'background-cold'
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return 'background-cold'

    return "background-warm"
  }
    return (
      <div className={`app mx-auto w-80 py-5 px-32 ${formatBackground()}`} style={{maxWidth :"992px"}}>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}


      <ToastContainer autoClose={1000} theme='colored' newestOnTop={true} />

      </div>
    )
}
