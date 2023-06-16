import { useState } from 'react'
import './assets/styles/App.css'
import Header from "./layouts/Header";
const filterItems = ['Tropical', 'Rooms', 'Amazing Pools', 'Lakefront']

function App() {
  const AirbnbBody = (
    <div className='main'>
     <div className='header'>
     <Header />
      
      <div className="navitems">

        {filterItems.map(n => (
          <div key={n} className="items">{n}</div>
        ))}
      </div>
     </div>
     </div>

  )


  return AirbnbBody
}


export default App
