import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userId} = useParams();
    return (
    <div className="bg-gray-500 px-2 py-1 text-3xl text-white text-center">User : {userId}</div>
  )
}

export default User