import LocationDesc from './LocationDesc.jsx'
import background from '../assets/backgroundRyM.png'
export default function MainCard() {
  
  return (
    <>
    <div className="header-container">
      <img src={background} alt="background" className="background"/>
        <img src="./src/assets/RyMLogo.png" alt="logo" className="logo" />
        <div className="header-card">
          <h1 className="header-title">Universal Civil Registration</h1>
        </div>
        <LocationDesc/>
    </div>
    </>
  )
}
