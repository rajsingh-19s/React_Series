import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
const [counter, setCounter]=useState(7)

let addValue=()=>{
  // counter+1
  setCounter(counter+1)

}

let UnAddValue=()=>{
  // counter+1
  if(counter<=0){
    return false;
  }else{
    setCounter(counter-1)
  }
  
}


  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>counter {counter}</h2>

      <button onClick={addValue}>Add Button{counter}</button>
      <br/><br/>
      <button onClick={UnAddValue}> UnAdd Button{counter}</button>
    </>
  )
}




export default App
