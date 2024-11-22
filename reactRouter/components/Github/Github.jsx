// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from "react-router"

function Github() {
  
  // 1st way of fetching data using useEffect**
  // const [user, setUser] = React.useState([])
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/maxwithbug')
  //       .then(res => res.json())
  //       .then(data =>{
  //           console.log(data)
  //           setUser(data)
  //       })  
  //   }, [])


  // return (
  //   <div className='text-center text-3xl bg-gray-600 text-white flex items-center justify-center gap-4'>
  //     <img src={user.avatar_url ? user.avatar_url : 'null'} alt="github_profile_image" className='h-[400px] m-12' />
  //     Github : {user.login ? <Link target='new' to={`https://github.com/${user.login}`}>{user.login}</Link>	 : 'Loading....' }   
  //     {/* try -> /user/${user.login} for getting the user name in user page */}
  //     </div>
  // )


  //2nd way of fetching data using fetch**

  const data = useLoaderData()
  return (
    <div>
      <div className='text-center text-3xl bg-gray-600 text-white flex items-center justify-center gap-4'>
        <img src={data.avatar_url ? data.avatar_url : 'null'} alt="github_profile_image" className='h-[400px] m-12' />
        Github : {data.login ? <Link target='new' to={`https://github.com/${data.login}`}>{data.login}</Link>	 : 'Loading....' }   
        {/* try -> /user/${data.login} for getting the user name in user page */}
        </div>
    </div>
  )
}

export const userInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/maxwithbug')
   return response.json()
}
export default Github