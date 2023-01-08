import React from 'react'

const AirQuality = () => {
  return (
    <div className='card-type1'>
        <div className='heading'>
            Air Quality
        </div>
        <div className='data-container'>
            <div className='rating'>
                72
            </div>
            <div className='changes'>
                <div className='change-1'>
                <i className='fas fa-arrow-up' style={{color:'#6dd0a5', fontSize:"20px"}}></i>
                <span className='arrow-ratings'>93</span>
                </div>
                <div className='change-2'>
                <i className='fas fa-arrow-down' style={{color:'#feb525',fontSize:"20px"}}></i>
                <span className='arrow-ratings'>61</span>
                </div>
            </div>

        </div>


    </div>
  )
}

export default AirQuality