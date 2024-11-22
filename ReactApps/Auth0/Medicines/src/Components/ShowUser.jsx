import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'

const ShowUser = () => {
    const { isAuthenticated , isLoading , user } = useAuth0();

    const [showInfo, setShowInfo] = useState(false);

    if(isLoading){
        <div>Loading...</div>
    }

    const ToggleInfo=()=>{
        setShowInfo(!showInfo)
    }
  return (
    isAuthenticated && (
        <div className='show-user'>
        <img src = {user.picture}
        onClick={ToggleInfo}
        />
        <div className={`user-info ${showInfo ? 'visible' : ''}`}></div>
        <p>{user.name}</p>
        <p>{user.email}</p>
       
        </div>
    )
  )
}

export default ShowUser