import React, {useState} from 'react'
import { useEffect } from 'react';
import useAPI from '../hooks/useAPI';
import ResidentsCard from './ResidentsCard';

export function LocationDesc({askContentLoaded, isLoading, setIsLoading}) {
    const [searchInput, setSearchInput] = useState('')
    
    const change = (e) => setSearchInput(e.target.value)

    const {location, residents, isLoaded} = useAPI(searchInput);
    
    useEffect(()=>{        
        askContentLoaded(isLoaded)
    },[isLoaded])

  return (
    location && (
      <>
        <div className='LocationDesc'>
        <div className="header-input">
          <input
            type="text"
            id="planetSearch"
            placeholder="Search by ID planet"
            value={searchInput}
            onChange={change}
          />
          <button
            htmlFor="planetSearch"
            id="planetSearchButton"
            
          >Search</button>
        </div>
          <div>
            <h1 className='align-text-center'>{location.name}</h1>
          </div>
          <div className='LocationDetails'>
            <p><span>Type:</span> {location.type}</p>
            <p><span>Dimension:</span> {location.dimension}</p>
            <p><span>Population:</span> {location.residents?.length}</p>
          </div>
          <ResidentsCard residents={[residents]} />
        </div>
      </>

    )
  )
}

export default LocationDesc
