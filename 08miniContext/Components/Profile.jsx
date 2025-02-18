import React,{useContext} from 'react'

import UserContext from '../src/Context/UserContext'



function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div> <br/> Please Login!</div>

    return <div><br/>Welcome {user.username} </div>
}

export default Profile