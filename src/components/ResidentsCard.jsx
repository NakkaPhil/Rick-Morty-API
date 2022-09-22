import React from 'react'
import ResidentInfo from './ResidentInfo'

export default function ResidentsCard({residents}) {

    const residentes = residents[0]
    const pages = Math.floor(residentes.length / 10)
    
    

  return (
    <div className='residentsCard'>
        <h2>Residents</h2>
          <div className='residentsContainer'>
              {
                residentes.map((r,i)=>(
                    <ResidentInfo 
                      urlResident={r}
                      key={r}
                    />
                )) 
              }
          </div>
    </div>
  )
}
