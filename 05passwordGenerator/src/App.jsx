import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

   //use ref hook
   let passwordRef = useRef(null)
  
  const [password, setPassword]=useState("")

  const passwordGenerator=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str+="123456789"
    if(charAllowed) str+="!#$%&()}¥₹$"

   

for (let index = 1; index <= length; index++) {
     let char = Math.floor(Math.random()*str.length+1)

          pass += str.charAt(char)
        
        }
          
          setPassword(pass)

   },[length,numAllowed,charAllowed,setPassword])
const copyPasswordToClipboard = useCallback(() => {

  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)

},[password])

   useEffect(()=>{

    passwordGenerator()
   },[length,charAllowed,numAllowed,])

  return (
    <>
   
   <div className='w-full max-w-md mx-auto shadow-md  rounded-lg py-3 text-center bg-gray-700 px-4 my-8 text-black'>
    
   <h1 className=' text-gray-300 text-2xl text-center my-4'>Password Generator</h1>
    
    <div className='flex overflow-hidden shadow  rounded-lg mb-4'>

       <input 
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1.5 px-3 bg-gray-400 '
            readOnly
            ref={passwordRef}
       />
      <button onClick={copyPasswordToClipboard} className='text-center px-4 bg-sky-400 text-black hover:bg-sky-700 hover:cursor-pointer'>Copy</button>


    </div>
      
       <div className='flex text-sm gap-x-2 ml-7 text-amber-200 '>
        
        <div className='flex items-center gap-x-1'>
          <input
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
          />
           <label>Length: {length}</label>
        </div>
        <div className='flex  items-center gap-x-1'>
          <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={()=>{
                setnumAllowed((prev)=>(!prev))
              }}
          />
          <label htmlFor='numberInput' >Number</label>
        </div>

        <div className='flex  items-center gap-x-1 '>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="CharInput"
          onChange={()=>{
            setCharAllowed((prev) => (!prev))
          }}
          />
          <label htmlFor='charcterInput'>Character</label>
        </div>
       </div>
      </div>  
          </>
   
  )
}

export default App
