import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [favoriteColor, setFavoriteColor] = useState('')
    const [favoriteFood, setfavoriteFood] = useState('')
  
    /*const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }*/
  
    const handleSubmit = e => {
      e.preventDefault();
      <h1>name</h1>;
      <hr/>;
      <p>age</p>;
      <br />;
      <p>contactNumber</p>;
      <br />;
      <h1>Favorites</h1>;
      <hr/>;
      <p>favoriteColor</p>;
      <br />;
      <p>favoriteFood</p>;
      <br />;
  
  }
  return (
    <form onSubmit={handleSubmit}>
    <label>Name: </label>
    <input 
      type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
   
    <label>Age:
      <input 
        type="text" 
        value={age}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <label>Contact number:
    <input 
        type="text" 
        value={contactNumber}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <label>Favorite color:
      <input 
        type="text" 
        value={favoriteColor}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <label>Favorite food:
    <input 
        type="text" 
        value={favoriteFood}
        onChange={(e) => setName(e.target.value)}
      />
    </label>

    <input type="submit" name="form_submit"/>
  </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
