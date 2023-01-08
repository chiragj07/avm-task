import React from 'react'
import AirQuality from './AirQuality'
import AudioComponent from './AudioComponent'
import Displays from './Displays'
import LightingComponent from './LightingComponent'
import Temprature from './Temprature'

const Cards = () => {
  return (
    <div className='cards-container'>
        <AirQuality />
        <Temprature />
        <AudioComponent />
        <Displays />
        <LightingComponent />

    </div>
  )
}

export default Cards