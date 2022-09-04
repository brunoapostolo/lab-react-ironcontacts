import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import DisplayContacts from './components/display';
import { useState } from 'react';
import AddRandom from './components/AddRandom';

function App() {
  const [famosos, setFamosos]= useState(contacts)
  const lista = contacts.slice(0,5)
  return (
    <div className="App">
      <AddRandom famosos={famosos}/>
      {lista.map ((celebridade)=>{
      return<DisplayContacts famoso={celebridade}/>

      })}
      

    </div>
  );
}

export default App;
