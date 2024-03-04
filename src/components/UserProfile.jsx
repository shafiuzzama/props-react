import React from 'react'

const UserProfile = ({userdata}) => {
  return (
    <div>
     <h1>{userdata.name}</h1>
    <img src={userdata.img} alt="" />
    <p>{userdata.title}</p>
    </div>
  )
}

export default UserProfile