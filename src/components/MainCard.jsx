import LocationDesc from './LocationDesc.jsx'
import background from '../assets/backgroundRyM.png'
import logo from '../assets/RyMLogo.png'
export default function MainCard() {
  
  return (
    <>
    <div className="header-container">
      <img src={background} alt="background" className="background"/>
        <img src={logo} alt="logo" className="logo" />
        <div className="header-card">
          <h1 className="header-title">Universal Civil Registration</h1>
        </div>
        <LocationDesc/>
    </div>
    </>
  )
}
