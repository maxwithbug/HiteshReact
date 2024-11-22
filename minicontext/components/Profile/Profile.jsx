import React from 'react'
import UserContext from '../../context/UserContext';

function Profile() {

const {user} = React.useContext(UserContext)


 if(!user){<h1>Loading.....</h1>}
  return (
    <div>
        Profile :{user.username}

    </div>
  )
}

export default Profile