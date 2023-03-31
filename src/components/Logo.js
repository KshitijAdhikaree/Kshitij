import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center mt-2 lg:self-center '>
      <MotionLink
        href='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center border-solid rounded-2xl
        border-[2px] hover:border-dark  text-2xl font-bold dark:border-light hover:bg-light hover:text-dark 
        md:text-xl '
      >
        K.A
      </MotionLink>
    </div>
  )
}

export default Logo
