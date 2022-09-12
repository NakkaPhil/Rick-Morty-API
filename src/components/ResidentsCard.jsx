import React from 'react'
import { useState } from 'react'
import ResidentInfo from './ResidentInfo'

export default function ResidentsCard({residents}) {

    const residentes = residents[0]

    console.log(residentes)
    

  return (
    <div className='residentsCard'>
        <h2>Residents</h2>
        <div className='residentsContainer'>
            {
               residentes.map((r)=>(
                <ResidentInfo urlResident={r}/>
               )) 
            }
        </div>
    </div>
  )
}
