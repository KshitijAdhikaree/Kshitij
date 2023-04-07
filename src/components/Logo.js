import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center mt-2 lg:self-center '>
      <Link
        href='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center border-solid rounded-2xl hover:bg-light
        border-[2px] hover:border-dark  text-2xl font-bold dark:border-light dark:hover:bg-light hover:text-dark
        md:text-xl '
      >
        K.A
      </Link>
    </div>
  )
}

export default Logo
