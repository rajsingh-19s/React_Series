import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId}=useParams()
  return (
    <div className='bg-black text-gray-500 text-2xl text-center p-6'>User:{userId}</div>
  )
}

export default User