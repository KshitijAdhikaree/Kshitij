import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-30 bg-light dark:bg-dark'
        initial={{ x: '100%', width: '100%', height: '100%' }}
        animate={{ x: '0%', width: '0%', height: '100%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'], height: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-20 bg-dark dark:bg-light'
        initial={{ x: '100%', width: '100%', height: '100%' }}
        animate={{ x: '0%', width: '0%', height: '100%' }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen z-10 bg-primary dark:bg-primaryDark'
        initial={{ x: '100%', width: '100%', height: '100%' }}
        animate={{ x: '0%', width: '0%', height: '100%' }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  )
}

export default TransitionEffect
