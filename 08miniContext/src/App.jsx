import React from "react";

import UserContextProvider from './Context/UserContextProvider'
import Login from "../Components/Login";
import Profile from "../Components/Profile";

function App(){

  return(

    <UserContextProvider >
          
          <h2 >Chai With React || Use Of Context   </h2>
          <Login/>
         <Profile/>

    </UserContextProvider>
  )

}

export default App