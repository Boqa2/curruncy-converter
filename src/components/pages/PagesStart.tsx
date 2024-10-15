import React from 'react'
import { Link } from 'react-router-dom'

const PagesStart = () => {
  return (
    <div className='h-[calc(100vh-75px)] justify-center flex items-center'>
      <Link className='button' to={'/currency'}> Start</Link>
    </div>
  )
}

export default PagesStart
