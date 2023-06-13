import './App.css';
import CrystalList from './components/CrystalList';
import React from 'react';

const crystalData = [
  {
    id: 1,
    name: "Ameythest",
    color: "purple",
    powers: "Infinite Knowledge and Wisdom"
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "orange",
    powers: "confidence and strength"
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "pink",
    powers: "love"
  }
]
//this is jsx it eventuals turns into js
function App() { //this is an app component that holds other components
  const title = "The Crystal Cove"
  return ( //only one main or root 
    <main classname='App'>
        <h1>{title}</h1>
        <CrystalList crystals = {crystalData}/>
    </main>
  );
}

export default App;
