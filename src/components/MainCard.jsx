import LocationDesc from './LocationDesc.jsx'
export default function MainCard() {
  
  return (
    <>
    <div className="header-container">
      <img src="./src/assets/backgroundRyM.png" alt="background" className="background"/>
        <img src="./src/assets/RyMLogo.png" alt="logo" className="logo" />
        <div className="header-card">
          <h1 className="header-title">Universal Civil Registration</h1>
        </div>
        <LocationDesc/>
    </div>
    </>
  )
}
