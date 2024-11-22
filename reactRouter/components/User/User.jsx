import React from 'react'
import { useParams } from 'react-router';

export default function User() {
    const {userid} = useParams()
    return (
    <div className='text-center text-3xl bg-orange-600 text-white'>User : {userid}</div>
  )
}

