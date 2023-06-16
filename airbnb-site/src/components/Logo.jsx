import AirbnbLogo from '../assets/images/AirbnbLogo.svg'

function Logo() {
  return (
    <img
        alt="Airbnb Logo"
        className="mr-3 h-8 sm:h-9"
        src={AirbnbLogo}
      />
  )
}

export default Logo