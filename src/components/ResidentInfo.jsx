import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function ResidentInfo({urlResident}) {

    
    
    const [resident, setResident] = useState({})

    useEffect(()=>{
        axios.get(`${urlResident}`)
        .then((res) => {
          setResident(res.data)
          
        })

    },[])

    console.log(resident)
  return (

    <div className='residentCard'>
      <img src={resident.image} alt="res-img" className='resCardImg' />
      <div className="residentDesc">
        <h3>{resident.name}</h3>
        <p>Status: {resident.status}</p>
        <p>Origin: {resident.origin?.name}</p>
        <p>Episodes where appear: {resident.episode?.length}</p>
      </div>
    </div>
    
  )
}
