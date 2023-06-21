import './App.css';
import CrystalList from './components/CrystalList';
import React, {useState} from 'react';
import axios from 'axios';
import CrystalForm from './components/CrystalForm'
const crystalsData = [
  // {
  //   id: 1,
  //   name: "Ameythest",
  //   color: "purple",
  //   powers: "Infinite Knowledge and Wisdom",
  //   charges: 0
  // },
  // {
  //   id: 2,
  //   name: "Tiger's Eye",
  //   color: "orange",
  //   powers: "confidence and strength",
  //   charges: 0
  // },
  // {
  //   id: 3,
  //   name: "Rose Quartz",
  //   color: "pink",
  //   powers: "love",
  //   charges: 0
  // }
]
//this is jsx it eventuals turns into js
function App() { //this is an app component that holds other components
  const [crystals, setCrystals] = useState(crystalsData)
  const title = "The Crystal Cove"

  React.useEffect(()=> {
    axios.get('http://localhost:5000/crystals').then((response)=> {
      setCrystals(response.data)
    })
  },[])

  const increaseCharge=(id) => {
      //crystals is being passed into prevCrystals 
      //needs to retun a brand new list to detect the comparison
      axios.patch(`http://localhost:5000/crystals/${id}`).then(response => {
        setCrystals(prevCrystals => {
          const updatedCrystal = prevCrystals.map(crystal => {
            return crystal.id ===id ? response.data : crystal 
          })
          // return entry.id === id ?{...entry, liked: !entry.liked} : entry
        return updatedCrystal
        })
      })
  };
  //{...crystal, charges: crystal.charges+1} means returning the dict with updated charges
  //function to remove crystal being passed down into crystallist/crystal
  const removeCrystal = (id)=> {
    axios.delete(`http://localhost:5000/crystals/${id}`).then(() => {
      setCrystals(prevCrystals => {
        const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
        return updatedCrystals
      })
    })
  };
  //the function will now update the UI to reflect the change 

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
        <CrystalForm/> 
        <p> Total Charges: {totalCharges()} </p>
        <CrystalList crystals = {crystals} increaseCharge ={increaseCharge} removeCrystal={removeCrystal} />
    </main>
  );
}
//total charges is a function because you want the total return which is a number//

export default App;
