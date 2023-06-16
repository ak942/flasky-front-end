import './App.css';
import CrystalList from './components/CrystalList';
import React, {useState} from 'react';
const crystalsData = [
  {
    id: 1,
    name: "Ameythest",
    color: "purple",
    powers: "Infinite Knowledge and Wisdom",
    charges: 0
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "orange",
    powers: "confidence and strength",
    charges: 0
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "pink",
    powers: "love",
    charges: 0
  }
]
//this is jsx it eventuals turns into js
function App() { //this is an app component that holds other components
  const [crystals, setCrystals] = useState(crystalsData)
  const title = "The Crystal Cove"

  const increaseCharge=(id) => {
      //crystals is being passed into prevCrystals 
      //needs to retun a brand new list to detect the comparison
      setCrystals(prevCrystals => {
        const updatedCrystal = prevCrystals.map(crystal => {
          return crystal.id ===id ? {...crystal, charges: crystal.charges+1} : crystal 
        })
      return updatedCrystal
      })
  };
  //function to remove crystal being passed down into crystallist/crystal
  const removeCrystal = (id)=> {
      setCrystals(prevCrystals => {
        const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
        return updatedCrystals
      })
  };

  //change the total on the front page
  const totalCharges = () => {
    let total = 0
    for (let crystal of crystals) {
      total += crystal.charges
    }

    return total
  };
  //function to get all crystals
  const showAllCrystal = () => {
    setCrystals(crystalsData)
  }

  return (
    <main classname='App'>
        <h1>{title}</h1>
        <button onClick ={showAllCrystal}> Show All Crystals </button>
        <p> Total Charges: {totalCharges()} </p>
        <CrystalList crystals = {crystals} increaseCharge ={increaseCharge} removeCrystal={removeCrystal} />
    </main>
  );
}
//total charges is a function because you want the total return which is a number//

export default App;
