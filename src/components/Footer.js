import Link from 'next/link'
import React from 'react'
import { CoffeeIcon } from './Icons'
import Layout from './Layout'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between text-center lg:flex-col lg:py-6 '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link
          href='https://github.com/KshitijAdhikaree'
          className='underline underline-offset-2 lg:py-3 '
          target={'_blank'}
        >
          Kshitij Adhikaree
        </Link>

        {/* <span className='flex items-center'>
          Buy me a coffee &nbsp;
          <motion.a
            href='https://www.buymeacoffee.com/kshitijAd'
            className='w-8'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <CoffeeIcon />
          </motion.a>
        </span> */}

        <motion.a
          href='https://www.buymeacoffee.com/kshitijAd'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-[180px] md:w-[120px]'
        >
          <img
            src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
            alt='Buy Me A Coffee'
            width='300'
            height='200'
          />
        </motion.a>
      </Layout>
    </footer>
  )
}

export default Footer
