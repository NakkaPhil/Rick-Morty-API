import React, { useState, useEffect } from 'react'
import axios from 'axios'


export function useAPI(locationParam) {
    const [locations, setLocations] = useState([])

    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState([])
    

    useEffect(()=>{
        let randomNum = Math.floor(Math.random() * 126) + 1
        

        axios.get(`https://rickandmortyapi.com/api/location/${locationParam ? locationParam : randomNum}`)
        .then( (res) => {
            setLocation(res.data)
            setResidents(res.data.residents)
        } )

        console.log(locations)
    }, [locationParam])

    
    
    return {location, residents}
    /*
    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState([])

    
    useEffect(()=>{
        let randomNum = Math.floor(Math.random() * 126) + 1
        

        axios.get(`https://rickandmortyapi.com/api/location/${randomNum}`)
        .then( (res) => {
            setLocation(res.data)
            setResidents(res.data.residents)
        } )
    }, [])
    
    return {location, residents}
    */
}

export default useAPI