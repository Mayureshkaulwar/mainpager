import React from 'react'
import './Home.css';

export default function body() {
  return (
    <>
    <div className="box1">
      <h2>THE BEST WAY OF RENTING A CAR</h2>
    </div>
    <div className="box2">
      <div className="box21"> Need a ride? We have you all covered </div>
    </div>
    <div className="comfort-dec">
    <button className="comfortBtn">MORE ABOUT US
    <img src="./images/dwnarr.png" alt="down-arrow" className="down-arr1"/>
    </button>
    <img src="./images/bluedots.png" alt="bluedots" className="bluedots" />
    </div>
    <div className="popularname">
      <div className="popularname1">Popular Brands
      </div>
      <h2 className='car1'>BMW</h2>
      <h2 className='car2'>TESLA</h2>
      <h2 className='car3'>SWIFT</h2>
      <h2 className='car4'>TATA</h2>
    </div>
    </>
  )
}
