import LocationDesc from './LocationDesc.jsx'
import background from '../assets/backgroundRyM.png'
import logo from '../assets/RyMLogo.png'
import { useState } from 'react'
export default function MainCard() {
  const [loading, setIsLoading] =  useState(true)

  const askContentLoaded = (prop) => {
    if(prop) setIsLoading(false)
  }
    
  
  return (
      <>
      
      {loading && <div className="loading"></div>}

        <div className="header-container">
          <img src={background} alt="background" className="background" />
          <img src={logo} alt="logo" className="logo" />
          <div className="header-card">
            <h1 className="header-title">Universal Civil Registration</h1>
          </div>
          <LocationDesc 
            askContentLoaded={askContentLoaded}
            isLoading={loading}
            setIsLoading={setIsLoading}
          />
        </div>
      
      </>
  )
}
