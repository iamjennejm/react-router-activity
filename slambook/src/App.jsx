import { useState } from 'react'
import './App.css'
/*import {MyForm} from "./components/MyForm";

function App() {

  return (
    <>
    MyForm
    <MyForm />
    </>
  )
}

export default App*/ 


function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [favoriteColor, setFavoriteColor] = useState('')
  const [favoriteFood, setFavoriteFood] = useState('')

  /*const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }*/

  const handleSubmit = e => {
    e.preventDefault();
    const form = document.querySelector("form");
    form.innerHTML = "";
    form.innerHTML = '<h1 id="lblName"></h1><hr/><p id="lblAge"></p><br /><p id="lblContactNumber"></p><br /><h1>Favorites</h1><hr/><p id="lblFavoriteColor"></p><br /><p id="lblFavoriteFood"></p><br />';
    document.querySelector("#lblName").innerHTML = name;
    document.querySelector("#lblAge").innerHTML = age;
    document.querySelector("#lblContactNumber").innerHTML = contactNumber;
    document.querySelector("#lblFavoriteColor").innerHTML = favoriteColor;
    document.querySelector("#lblFavoriteFood").innerHTML = favoriteFood;
   
}
return (
  <div id="formFields">
  <form onSubmit={handleSubmit} id="myForm">
  <div id="lblName"><label>Name: </label>
  <input 
    type="text" 
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  </div>
 
  <div><label>Age: </label>
    <input 
      type="text" 
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>
  <div><label>Contact number: </label>
  <input 
      type="text" 
      value={contactNumber}
      onChange={(e) => setContactNumber(e.target.value)}
    />
  </div>
  <div><label>Favorite color: </label>
    <input 
      type="text" 
      value={favoriteColor}
      onChange={(e) => setFavoriteColor(e.target.value)}
    />
  </div>
  <div><label>Favorite food: </label>
  <input 
      type="text" 
      value={favoriteFood}
      onChange={(e) => setFavoriteFood(e.target.value)}
    />

  </div>

  <input type="submit" name="forSubmit"/>
</form>
</div>
)
}

export default App

