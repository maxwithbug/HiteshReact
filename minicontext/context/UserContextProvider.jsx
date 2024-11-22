import React from 'react'
import UserContext from './UserContext'



//centralizing context and a Rapper

const UserContextProvider = ({children}) => {
    const [user , setUser ] = React.useState({})
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider