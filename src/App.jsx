import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import  viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) // this is the main feature of react where we can update the counter value in one place it automatically update every where.


  // let counter = 15;
  const addValue = ()=> {
    console.log("clicked");
    
    //counter = counter + 1
    setCounter (counter + 1)
    
  }
  const removevalue = () =>{
    setCounter (counter - 1)

  }

  return (
    
    <> {/* this is the fragment in react where we can write multiple html tags. */}
      <h1>Chai with Gulshan</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removevalue}>decrees value</button>
    </>
  )
}

export default App
