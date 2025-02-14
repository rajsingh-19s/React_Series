import { useState } from 'react'



function App() {
  let [color, setColor]=useState("grey");

  return (
  <div className='h-screen w-full  duration-700'
   
   style={{backgroundColor: color}}
   >

<div className='fixed flex flex-wrap justify-center bottom-27 inset-x-0 px-2   '>
  
  <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-1.5 py-1.5 rounded-xl border-[1.5px] '>
   
  <button 
      onClick = {() => setColor ("pink")}
      className="outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black"style={{backgroundColor : "pink"}}>
      Pink</button>
    <button 
      onClick = {() => setColor ("red")}
      className="outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black"style={{backgroundColor : "red"}}>
      Red</button>
    <button 
      onClick = {() => setColor ("green")}
      className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black'style={{backgroundColor:"green"}}>
      Green</button>
    <button
      onClick = {() => setColor ("white")}
      className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-black shadow-lg border-[1.5px] border-black'style={{backgroundColor:"white"}}>
      White</button>
    <button 
      onClick = {() => setColor ("black")}
      className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-white'style={{backgroundColor:"black"}}>
      Black</button>
    <button 
       onClick = {() => setColor ("olive")}
       className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black'style={{backgroundColor:"Olive"}}>
        Olive</button>
    <button 
        onClick = {() => setColor ("grey")}
        className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black'style={{backgroundColor:"grey"}}>
        Grey</button>
    <button 
        onClick = {() => setColor ("yellow")}
        className='outline-none px-4.5 py-1.5 rounded-xl  hover:cursor-pointer text-grey  shadow-lg border-[1.5px] border-black'style={{backgroundColor:"Yellow"}}>
        Yellow</button>
    <button 
        onClick = {() => setColor ("blue")}
        className='outline-none px-4.5 py-1.5 rounded-xl hover:cursor-pointer text-white shadow-lg border-[1.5px] border-black'style={{backgroundColor:"blue"}}>
        Blue</button>


      </div>
    </div>
   </div>
  )
}

export default App

