import React,{useState,useContext} from 'react'
import UserContext from '../src/Context/UserContext'

function Login() {
const [username,setUsername]=useState(null)
const [password,setPassword]=useState(null)

    const {setUser} = useContext(UserContext)
    const OnHandleClick= (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h4>Login</h4>
        <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            
        
        />

            {" "}
        
    
        <input
            type='text'
            placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            

        
        />

        {" "}

        <button onClick={OnHandleClick} >Submit</button>
        
        </div>
  )
}

export default Login