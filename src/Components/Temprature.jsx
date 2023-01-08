import React from 'react'

import {ReactComponent as Fire} from '../assets/fire.svg'
import {ReactComponent as Snowflake} from '../assets/snowflake.svg'


const Temprature = () => {
  return (
    <div className='card-type1'>
        <div className='heading'>
            Temperature
        </div>
        <div className='data-container'>
            <div className='rating  blue temp'>
            21 <span className='temp-unit'>&#8451;</span>
            </div>
            <div className='changes'>
                <div className='change-1'>
                <Fire style={{width:"12px"}}/>
                <span className='arrow-ratings'>26</span> <span className='temp-unit-ratings'>&#8451;</span>
                </div>
                <div className='change-2'>
                <Snowflake style={{width:"12px"}}/>
                <span className='arrow-ratings'>18</span><span className='temp-unit-ratings'>&#8451;</span>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Temprature