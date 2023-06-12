// import logo from './logo.svg';
import './App.css';
import CrystalList from './components/CrystalList';
//this is jsx it eventuals turns into js
function App() { //this is an app component that holds other components
  return ( //only one main or root 
    <main classname='App'>
        <h1>The Crystal Cove</h1>
        <CrystalList/>
    </main>
  );
}

export default App;
