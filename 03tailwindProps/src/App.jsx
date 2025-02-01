import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1 className='bg-red-300 text-black p-4 rounded-xl mb-10'  >Tailwind Test</h1>

     
       <Cards userName="Raj Singh" btnText='click Me' /> 
       <Cards userName="Tony Stark" />
    </>
  )
}

export default App
