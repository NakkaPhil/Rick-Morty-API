import React, { useState, useEffect } from 'react'
import axios from 'axios'


export function useAPI(locationParam) {
    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)    

    useEffect(()=>{
        let randomNum = Math.floor(Math.random() * 126) + 1
        

        axios.get(`https://rickandmortyapi.com/api/location/${locationParam ? locationParam : randomNum}`)
        .then( (res) => {
            setLocation(res.data)
            setResidents(res.data.residents)
            setIsLoaded(true)
        } )
    }, [locationParam])
    
    return {location, residents, isLoaded}
}

export default useAPI